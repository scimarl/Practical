import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, Filter, FilterSettingsModel, IFilter } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './data';


export default class Grid extends React.Component<{}, {}>{
     public FilterOptions: FilterSettingsModel = {
    type: 'Menu'
  };
    public Filter : IFilter = {
    type: 'CheckBox'
  }
  public render() {
    return <GridComponent dataSource={data} allowSorting={true} allowMultiSorting={true} allowFiltering={true} filterSettings={this.FilterOptions} height={270} >
        <ColumnsDirective >
            <ColumnDirective field='name' filter={this.Filter} width='100' />
            <ColumnDirective field='region' filter={this.Filter}  width='100'/>
            <ColumnDirective field='price' width='100' textAlign="Right"/>
            <ColumnDirective field='rate' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='action' width='100'/>
        </ColumnsDirective>
        <Inject services={[Sort,Filter]} />
    </GridComponent>
  }
};