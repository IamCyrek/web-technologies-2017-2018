import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TextAreaComponent from './TextAreaComponent';

class TabsComponent extends React.Component {

    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }

    render() {
        return (

            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    <Tab>Основное</Tab>
                    <Tab>Образование</Tab>
                    <Tab>Контакты</Tab>
                </TabList>
                <TabPanel>
                    <TextAreaComponent id="textArea1" number={1} />
                </TabPanel>
                <TabPanel>
                    <TextAreaComponent id="textArea2" number={2} />
                </TabPanel>
                <TabPanel>
                    <TextAreaComponent id="textArea3" number={3} />
                </TabPanel>
            </Tabs>
        );
    }


}



export default (TabsComponent);