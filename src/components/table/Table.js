import React, { Component } from 'react'

import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table'

import './Table.css'
import data from '../../data.json'

function urlFormatter(cell) {
  return (
    <a href={cell.S} className="badge badge-success">
      Issue
    </a>
  )
}

function dateFormatter(cell) {
  const now = new Date().getTime()
  const miliseconds = now - Number(cell.S)
  const seconds = Number(Math.floor(miliseconds / 1000))
  const minutes = Number(Math.floor(seconds / 60))
  const hours = Number(Math.floor(minutes / 60))
  const days = Number(Math.floor(hours / 24))
  return days
}

function repoFormatter(cell) {
  return cell.S.split('_').join('/')
}

function labelsFormatter(cell) {
  return cell.S.split(',').join(', ')
}

function languageFormatter(cell) {
  return cell.S
}

function titleFormatter(cell) {
  return cell.S
}

class Table extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: true,
      data: data.Items
    }
  }

  render() {
    const options = {
      onFilterChange: this.onFilterChange
    }
    return (
      <React.Fragment>
        {!this.state.loading ? (
          <div className="loading-container">
            <div className="lds-ring">
              <div />
              <div />
            </div>
            <div>Data Loading...</div>
          </div>
        ) : (
          <BootstrapTable
            ref="table"
            data={this.state.data}
            options={options}
            hover
            condensed
            pagination={true}
          >
            <TableHeaderColumn
              isKey={true}
              ref="Title"
              dataField="Title"
              dataFormat={titleFormatter}
            >
              Title
            </TableHeaderColumn>
            <TableHeaderColumn
              ref="Repo"
              dataField="Repo"
              filterFormatted={true}
              filter={{
                type: 'TextFilter',
                placeholder: 'Name of repo is...',
                defaultValue: 'facebook/react'
              }}
              dataFormat={repoFormatter}
            >
              Repo
            </TableHeaderColumn>
            <TableHeaderColumn
              ref="Language"
              dataField="Language"
              filterFormatted={true}
              filter={{
                type: 'TextFilter',
                placeholder: 'Language?',
                condition: 'eq'
              }}
              dataFormat={languageFormatter}
            >
              Language
            </TableHeaderColumn>
            <TableHeaderColumn
              ref="Labels"
              dataField="Labels"
              filterFormatted={true}
              filter={{ type: 'TextFilter', placeholder: 'Label?' }}
              dataFormat={labelsFormatter}
            >
              Labels
            </TableHeaderColumn>
            <TableHeaderColumn
              ref="Time"
              dataField="Time"
              filterFormatted={true}
              dataFormat={dateFormatter}
              filter={{
                type: 'NumberFilter',
                delay: 1000,
                numberComparators: ['=', '>', '<='],
                defaultValue: { number: 10, comparator: '<=' }
              }}
            >
              Days Old
            </TableHeaderColumn>
            <TableHeaderColumn
              ref="Url"
              dataField="Url"
              dataFormat={urlFormatter}
            >
              URL
            </TableHeaderColumn>
          </BootstrapTable>
        )}
      </React.Fragment>
    )
  }
}

export default Table
