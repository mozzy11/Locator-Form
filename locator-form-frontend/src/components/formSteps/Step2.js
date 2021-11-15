import React from "react"
import { FormattedMessage } from 'react-intl'
import { Field } from 'formik'
import { MyTextInput, MySelect, dateInputToday } from '../inputs/MyInputs'
import { airlines } from '../data/airlines'

class Step2 extends React.Component {

	render() {
		return <div>

			<div className="step" id="step2">
				<div id="flightInformation" className="section">
					<div className="row">
						<div className="col-lg-4 form-group">
							<Field name="airlineName">
								{({ field, form, meta }) =>
									<MySelect label={<FormattedMessage id="nav.item.airline" defaultMessage="Airline" />}
										name={field.name} 
										form={form}
										requireField={true} 
										isSearchable={true}
										placeholder={this.props.intl.formatMessage({ id: 'nav.item.select.placeholder' })}
										options={airlines}
									/>
								}
							</Field>
						</div>
						<div className="col-lg-4 form-group">
							<MyTextInput
								label={<FormattedMessage id="nav.item.flightNumber" defaultMessage="Flight" />}
								name="flightNumber"
								requireField={true}
								type="text"
							/>
						</div>
					  {(this.props.role =='healthDesk'||this.props.role ==undefined)&& (
						<div className="col-lg-4  form-group">
							<MyTextInput
								label={<FormattedMessage id="nav.item.seat" defaultMessage="Seat" />}
								name="seatNumber"
								type="text"
							/>
						</div>
						)}
					</div>
					<div className="row">
						<div className="col-lg-4  form-group">
							<MyTextInput
								label={<FormattedMessage id="nav.item.dateOfArrival" defaultMessage="Date Of Arrival" />}
								name="arrivalDate"
								requireField={true}
								type="date"
								placeholder={this.props.intl.formatMessage({ id: 'date.format' })}
								min={dateInputToday()}
							/>
						</div>
						<div className="col-lg-4  form-group">
							<MyTextInput
								label={<FormattedMessage id="nav.item.timeOfArrival" defaultMessage="Time of Arrival" />}
								name="arrivalTime"
								requireField={false}
								type="time"
							/>
						</div>
						<div className="col-lg-4 form-group ">
							<Field name="visitPurpose">
								{({ field, form, meta }) =>
									<MySelect label={<FormattedMessage id="nav.item.purposeOfVisit" defaultMessage="Purpose of Visit" />}
										name={field.name} 
										form={form}
										requireField={true} 
										placeholder={this.props.intl.formatMessage({ id: 'nav.item.select.placeholder' })}
										options={ this.props.formikProps.values.travellerType === 'resident' ?
											[
												{ "value": "citizen", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.citizen' }) },
												{ "value": "crew_for_resident", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.crew_for_resident' }) },
											]
										    :
											[
												{ "value": "business", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.business' }) },
												{ "value": "study", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.study' }) },
												{ "value": "wedding", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.wedding' }) },
												{ "value": "visit_holiday", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.visit' }) },
												{ "value": "sport", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.sport' }) },
												{ "value": "spouse_of_mauritian", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.spouse_of_mauritian' }) },
												{ "value": "resident_permit_holder", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.resident_permit_holder' }) },
												{ "value": "occupation_permit_holder", "label": this.props.intl.formatMessage({ id: 'nav.item.purposeOfVisit.option.occupation_permit_holder' }) },
											]
										}
									/>								 							 			
								}
							</Field>
						</div>
					</div>
				</div>
			</div>
		</div>
	}

}
export default Step2