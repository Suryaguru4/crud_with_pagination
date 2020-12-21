import React, { useEffect } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import Table from 'components/Table/Table.js'
import Card from 'components/Card/Card.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import { connect } from 'react-redux'
import {
  getApiAction,
  deleteItemAction,
  editItemAction,
  addItemAction
} from 'container/actionTypes/action'

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  }
}

const useStyles = makeStyles(styles)

function TableList (props) {
  const classes = useStyles()

  useEffect(() => {
    props.getApi()
  }, [])
  return (
    <div>
      <h3 className="mb-3"> Add University </h3>
      <CustomInput addItem= {props.addItem}></CustomInput>
          <Card>
            <CardHeader color='primary'>
              <h4 className={classes.cardTitleWhite}>University List</h4>
              <p className={classes.cardCategoryWhite}>
                Here is the list of Universities in turkey
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor='primary'
                tableHead={['Name', 'Country', 'Website', 'Domain']}
                tableData={props.list}
                deleteItem={props.deleteItem}
                editItem = {props.editItem}
              />
            </CardBody>
          </Card>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    list: state.reducer_1
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getApi: () => {
      dispatch(getApiAction())
    },
    deleteItem: index => {
      dispatch(deleteItemAction(index))
    },
    editItem: (index, data) => {
      dispatch(editItemAction(index, data))
    },
    addItem: data => {
      dispatch(addItemAction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableList)
