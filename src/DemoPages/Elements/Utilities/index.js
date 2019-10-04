import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import UtilitiesColors from './Examples/ColorStates';
import UtilitiesHelpers from './Examples/Helpers';
import UtilitiesAnimations from './Examples/Animations';

class UtilitiesExamples extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Filtros"
                    subheading={this.props.valorBusca}
                    icon="pe-7s-filter icon-gradient bg-deep-blue"
                />
                {/* <UtilitiesAnimations/> */}
                <UtilitiesColors/>
                {/* <UtilitiesHelpers/> */}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    valorBusca: state.BuscaReducer.valorBusca
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UtilitiesExamples);