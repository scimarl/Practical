import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, Filter, FilterSettingsModel, IFilter } from '@syncfusion/ej2-react-grids';
import { DetailRow, Grid, GridModel } from '@syncfusion/ej2-react-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './data';


export default class Grids extends React.Component<{}, {}>{
     public grid: Grid | null | undefined;
     public FilterOptions: FilterSettingsModel = {
    type: 'Menu'
  };
    public Filter : IFilter = {
    type: 'CheckBox'
  };

  public childGrid : GridModel = {
    columns: [
      { field: 'explanation', headerText: 'Explanation', width: 150 }
    ],
    dataSource: data,
    queryString: 'id'
  };
  
  public render() {
    return <GridComponent dataSource={data} allowSorting={true} allowMultiSorting={true} 
    allowFiltering={true} filterSettings={this.FilterOptions} childGrid={this.childGrid} 
       height={270} >
        <ColumnsDirective >
            <ColumnDirective field='name' filter={this.Filter} width='100' />
            <ColumnDirective field='region' filter={this.Filter}  width='100'/>
            <ColumnDirective field='price' width='100' textAlign="Right"/>
            <ColumnDirective field='rate' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='action' width='100'/>
        </ColumnsDirective>
        <Inject services={[Sort,Filter,DetailRow]} />
    </GridComponent>
  }
};