import React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StarsGrowReposComponent from './StarsGrowReposComponent';


class TabsStarsGrowReposComponent extends React.Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }

    render() {
        return (

            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    <Tab>Grow Repositories</Tab>
                    <Tab>Top Repositories</Tab>
                </TabList>

                <TabPanel>

                    <StarsGrowReposComponent  request ={'GROW'}/>
                </TabPanel>

                <TabPanel>
                    <StarsGrowReposComponent request = {'TOP'}/>
                </TabPanel>

            </Tabs>
        );
    }


}


export default connect(null)(TabsStarsGrowReposComponent);