import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';


class ProductList extends Component {
  render() {
    return (
      <div>
        <Alert>
          <h3>Product List / {this.props.currentCategory.categoryName}</h3>
        </Alert>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    currentCategory: state.changeCategoryReducer
  };
};




export default connect(mapStateToProps)(ProductList);