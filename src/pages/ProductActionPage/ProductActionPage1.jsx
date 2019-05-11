import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/actProducts';
import { connect } from 'react-redux';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pro_id: '',
            txtpro_name: '',
            txtcat_id: '',
            chbkStatusSaleProduct: '',
            chbkStatusHotProduct: '',
            chbkStatusActive: '',
            txtregular_price: '',
            txtsale_price: '',
            txtdescription: '',
            txtcolor: '',
            txtmaterials: '',
            txtmade_in: '',
            txtsizeType: 'freeSize',
            txtsize1: '',
            txtsize2: '',
            txtsize3: '',
            txtsize4: '',
            txtsize5: ''
        }
        this.onRadioChange = this.onRadioChange.bind(this);
    }
    onRadioChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //edit, hiện thị dữ liệu của product cần chỉnh sửa
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var store_id = sessionStorage.getItem('sto_id');
            this.props.onEditProduct(store_id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                txtpro_id: itemEditing.pro_id,
                txtpro_name: itemEditing.pro_name,
                txtcat_id: itemEditing.cat_id,
                chbkStatusSaleProduct: itemEditing.sale_product,
                chbkStatusHotProduct: itemEditing.hot_product,
                chbkStatusActive: itemEditing.active,
                txtregular_price: itemEditing.regular_price,
                txtsale_price: itemEditing.sale_price,
                txtdescription: itemEditing.description,
                txtcolor: itemEditing.color,
                txtmaterials: itemEditing.materials,
                txtmade_in: itemEditing.made_in,
                txtsizeType: itemEditing.size_type,
                txtsize1: itemEditing.size1,
                txtsize2: itemEditing.size2,
                txtsize3: itemEditing.size3,
                txtsize4: itemEditing.size4,
                txtsize5: itemEditing.size5,
            });
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        target.checked = target.checked ? "1" : "0";
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        //chong load lai trang
        e.preventDefault();
        var { txtpro_name, txtcat_id,
            chbkStatusSaleProduct, chbkStatusHotProduct, chbkStatusActive,
            txtregular_price, txtsale_price, txtdescription, txtcolor, txtmaterials, txtmade_in,
            txtsizeType, txtsize1, txtsize2, txtsize3, txtsize4, txtsize5
        } = this.state;

        var { history } = this.props;

        chbkStatusSaleProduct = chbkStatusSaleProduct ? "1" : "0";
        chbkStatusHotProduct = chbkStatusHotProduct ? "1" : "0";
        chbkStatusActive = chbkStatusActive ? "1" : "0";
        var product = {
            pro_name: txtpro_name,
            cat_id: txtcat_id,
            sale_product: chbkStatusSaleProduct,
            hot_product: chbkStatusHotProduct,
            active: chbkStatusActive,
            regular_price: txtregular_price,
            sale_price: txtsale_price,
            description: txtdescription,
            color: txtcolor,
            materials: txtmaterials,
            made_in: txtmade_in,
            sizeType: txtsizeType,
            size1: txtsize1,
            size2: txtsize2,
            size3: txtsize3,
            size4: txtsize4,
            size5: txtsize5
        };
        //cập nhật
        var store_id = sessionStorage.getItem("sto_id");
        if (store_id) {
            var token = sessionStorage.getItem('token');
            var pro_id = sessionStorage.getItem('pro_id');

            this.props.onUpdateProduct(product, pro_id, store_id, token);
            history.push("/product-list");
            //thêm mới
        } else {
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    render() {
        //khoi tao cac bien de lay du lieu
        var { txtpro_name, txtcat_id,
            chbkStatusSaleProduct, chbkStatusHotProduct, chbkStatusActive,
            txtregular_price, txtsale_price, txtdescription, txtcolor, txtmaterials, txtmade_in,
            txtsizeType, txtsize1, txtsize2, txtsize3, txtsize4, txtsize5
        } = this.state;
        //Xu ly menu
        if (sessionStorage.getItem('role') === 'store') {
            var menu = <MenuStore />;
        }
        else {
            menu = <MenuAdmin />
        }

        if (this.state.txtsizeType === "charSize") {
            var a = "S: ";
            var b = "M: ";
            var c = "L: ";
            var d = "XL: ";
            var e = "XXL: ";
        } else if (this.state.txtsizeType === "numberSize") {
            a = "30: ";
            b = "31: ";
            c = "32: ";
            d = "33: ";
            e = "34: ";
        } else {
            a = "FreeSize: "
        }
        return (
            <div>
                <Header />
                {menu}
                <div className="wrapper">
                    <div className="wrapper">
                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    Thêm Sản Phẩm
                             <small>advanced tables</small>
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a><i className="fa fa-dashboard" /> Home</a></li>
                                    <li><a>Tables</a></li>
                                    <li className="active">Thêm Sản Phẩm</li>
                                </ol>
                            </section>
                            <section className="content">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <form onSubmit={this.onSave}>
                                                    <table>
                                                        <tbody>

                                                            <tr>
                                                                <td><label>pro_name: </label></td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="txtpro_name"
                                                                        value={txtpro_name}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>cat_id: </label></td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="txtcat_id"
                                                                        value={txtcat_id}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td> <label>sale_product: </label></td>

                                                                <td>
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            name="chbkStatusSaleProduct"
                                                                            value={chbkStatusSaleProduct}
                                                                            onChange={this.onChange}
                                                                            checked={chbkStatusSaleProduct}
                                                                        />
                                                                        &nbsp;
                                                                        Có
                                                                </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>hot_product: </label></td>

                                                                <td>
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            name="chbkStatusHotProduct"
                                                                            value={chbkStatusHotProduct}
                                                                            onChange={this.onChange}
                                                                            checked={chbkStatusHotProduct}
                                                                        />
                                                                        &nbsp;
                                                                        Có
                                                                </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>active: </label></td>

                                                                <td>
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            name="chbkStatusActive"
                                                                            value={chbkStatusActive}
                                                                            onChange={this.onChange}
                                                                            checked={chbkStatusActive}
                                                                        />
                                                                        &nbsp;
                                                                        Có
                                                                </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>regular_price : </label></td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        name="txtregular_price"
                                                                        value={txtregular_price}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>sale_price : </label></td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        name="txtsale_price"
                                                                        value={txtsale_price}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>description : </label></td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="txtdescription"
                                                                        value={txtdescription}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>color : </label></td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="txtcolor"
                                                                        value={txtcolor}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>materials : </label></td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="txtmaterials"
                                                                        value={txtmaterials}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>made_in : </label></td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="txtmade_in"
                                                                        value={txtmade_in}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>sizeType : </label></td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="txtsizeType"
                                                                        value={txtsizeType}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>sizeType : </label></td>
                                                                <td>
                                                                    <input
                                                                        type="radio"
                                                                        name="txtsizeType"
                                                                        value="charSize"
                                                                        checked={this.state.txtsizeType === "charSize"}
                                                                        onChange={this.onRadioChange}
                                                                        defaultValue="male"
                                                                    />
                                                                    charSize
                                                                    &nbsp;
                                                                <input
                                                                        type="radio"
                                                                        name="txtsizeType"
                                                                        value="numberSize"
                                                                        checked={this.state.txtsizeType === "numberSize"}
                                                                        onChange={this.onRadioChange}
                                                                        defaultValue="male"
                                                                    />
                                                                    numberSize
                                                                    &nbsp;
                                                                <input
                                                                        type="radio"
                                                                        name="txtsizeType"
                                                                        value="freeSize"
                                                                        checked={this.state.txtsizeType === "freeSize"}
                                                                        onChange={this.onRadioChange}
                                                                        defaultValue="male"
                                                                    />
                                                                    freeSize
                                                            </td>
                                                            </tr>
                                                            <tr>
                                                                <td>{a} </td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        name="txtsize1"
                                                                        value={txtsize1}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>{b} </td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        name="txtsize2"
                                                                        value={txtsize2}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>{c} </td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        name="txtsize3"
                                                                        value={txtsize3}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>{d}</td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        name="txtsize4"
                                                                        value={txtsize4}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>{e} </td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        name="txtsize5"
                                                                        value={txtsize5}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <Link to="/product/add" className="btn btn-danger"  >
                                                        Trở lại
                                                    </Link>
                                                    &nbsp;
                                                    <button type="submit" className="btn btn-primary"  >
                                                        Lưu lại
                                                    </button>
                                                    &nbsp;
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (store_id) => {
            dispatch(actGetProductRequest(store_id));
        },
        onUpdateProduct: (product, pro_id, store_id, token) => {
            dispatch(actUpdateProductRequest(product, pro_id, store_id, token));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
