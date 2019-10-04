import React, {Fragment} from 'react'
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'
import withDragDropContext from '../../withDnDContext'


class Agenda extends React.Component {

    constructor(props){
        super(props)


        let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week)
        schedulerData.config.schedulerWidth = '90%'

        moment.locale('pt');
        schedulerData.setLocaleMoment(moment)
        
        let resources = [
            {
                id: '1',
                name: 'Sala mexida 1',
                groupOnly: true
            },
            {
                id: '2',
                name: 'Sala mexida 2'
            }            
        ]
        schedulerData.setResources(resources)

        let events = [
        {
                id: 1,
                start: '2019-10-03 15:00:00',
                end: '2019-10-03 15:30:00',
                resourceId: '1',
                title: 'Testar o MIG',
                bgColor: '#D9D9D9'
            },
            {
                id: 2,
                start: '2019-10-03 15:31:00',
                end: '2019-10-03 18:00:00',
                resourceId: '1',
                title: 'Tem que ve',
                resizable: false
            }
        ]

        schedulerData.setEvents(events)

        this.state = {
            viewModel: schedulerData
        }
    }

    prevClick = (schedulerData)=> {
        schedulerData.prev();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData)=> {
        schedulerData.next();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    }


    render() {

        const {viewModel} = this.state;

        return (
            <Fragment>
                
                <Scheduler schedulerData={viewModel}
                        prevClick={this.prevClick}
                        nextClick={this.nextClick}
                        onSelectDate={this.onSelectDate}
                        onViewChange={this.onViewChange}
                        eventItemClick={this.eventClicked}
                />
                
            </Fragment>
        )
    }
}

export default withDragDropContext(Agenda)