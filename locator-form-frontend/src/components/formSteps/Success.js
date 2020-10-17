import React from "react"
import { FormattedMessage } from 'react-intl'
import Summary from './Summary'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

class Success extends React.Component {


	printSummaryPDF = () => {
		window.print()
    // var json = JSON.stringify(values)
    // fetch(`${process.env.REACT_APP_DATA_IMPORT_API}/summaryDownload`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: json
    // }).then(async response => {
    //   const pdf = await response.blob()
    //   if (response.ok) {
    //     this.onSuccess(labelContentPairs)
    //     this.setState({ activeStep: this.state.activeStep + 1 })
    //   } else {
    //     throw new Error("didn't receive ok")
    //   }
    // }).catch(err => {
    //   this.setState({ isSubmitting: false })
    //   console.log(err)
    //   this.setState({ 'submitErrorKey': 'error.submit' })
	// })
	
	// 	var pdf = new jsPDF('p', 'mm', 'letter');

	// 	html2canvas(document.getElementById('full-summary')).then((canvas) => {
	// 		const imgData = canvas.toDataURL('image/png');
	// 		var imgWidth = 210; 
	// 		var pageHeight = 295;  
	// 		var imgHeight = canvas.height * imgWidth / canvas.width;
	// 		var heightLeft = imgHeight;
	// 		var position = 19;

	// 		pdf.addImage(imgData, 'PNG', 19, position, imgWidth - (19 * 2), imgHeight );
	// 		heightLeft -= pageHeight;

	// 		while (heightLeft >= 0) {
	// 			position = heightLeft - imgHeight ;
	// 			pdf.addPage();
	// 			pdf.addImage(imgData, 'PNG', 19, position, imgWidth - (19 * 2), imgHeight + (19));
	// 			heightLeft -= pageHeight;
	// 		}
	// 		pdf.save("locatorForm.pdf");
	// 	});
	}

	render() {

		var Barcode = require('react-barcode')
		return (<div>
			{/* <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe> */}
			<div className="row no-print">
				<div className="col-lg-12 success-large text-center">
					<FormattedMessage id="submit.success.msg" defaultMessage="Thank you for filling out our online form. Please monitor your email for any further instructions. If you do not receive an email, please print or save the Summary PDF somewhere you can access when you land in Mauritius " />
				</div>
			</div>
			<div className="row no-print">
				<div className="col-lg-12 success-large text-center">
				<button type="button" className="confirm-button" onClick={this.printSummaryPDF}><FormattedMessage id="summary.print.button" defaultMessage="Print Summary"/></button>
				</div>
			</div>
			<div id="full-summary">
				<Summary formikProps={this.props.formikProps}/>
				{this.props.labelContentPairs.map(function (labelContentPair) {
					return (
						<div className="row">
							<div className="col-lg-12 ">
								<h5>{labelContentPair.label}:</h5>
								<Barcode value={labelContentPair.barcodeContent} />
							</div>
						</div>)
				})}
			</div>
		</div>
		)
	}

}
export default Success