import React, { Component } from 'react'
// burada connect e ihtiyacımız var çünkü eventleri ve state i redux tan almaliyiz.
import { connect } from 'react-redux';
import { Alert, ListGroup, ListGroupItem } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions';


class CategoryList extends Component {

  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
  };

  render() {
    return (
      <div>
        <Alert>
          <h3>Categories</h3>
        </Alert>
        <ListGroup>
          {this.props.categories.map(category => (

            <ListGroupItem
              action
              color="success"
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>

          ))}
        </ListGroup>
      </div>
    )
  }
}

// bu fonksiyon stateleri properties a aktarmak içindir.

function mapStateToProps(state) {

  return {
    // currentCategory adinda bir obje oluşturduk ve conncetten gelen state için (buda store dan geliyor)
    // changeCategoryReducer i bağla fakat burada bize state değeri initalState.in içerisindeki currentCategory
    // olarak gelecektir biz bir elemana ulaşmak ister isek: currentCategory.x --> x için key adı vermeliyiz.
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategory, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
    }
  }
}

// burada hem connect islemini yapip hemde CategoryList i aynı anda export ediyoruz.
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);