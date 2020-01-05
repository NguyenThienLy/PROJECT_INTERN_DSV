export class ProductType {
    constructor() {}

    static FETCH_PRODUCTFILTER_PENDING = 'FETCH_PRODUCTFILTER_PENDING';
    static FETCH_PRODUCTFILTER_SUCCESS = 'FETCH_PRODUCTFILTER_SUCCESS';
    static FETCH_PRODUCTFILTER_ERROR = 'FETCH_PRODUCTFILTER_ERROR';

    static GET_PRODUCT_PENDING = 'GET_PRODUCT_PENDING';
    static GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
    static GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

    static INCREASE_QUANTITY_PRODUCT = 'INCREASE_QUANTITY_PRODUCT';
    static DECREASE_QUANTITY_PRODUCT = 'DECREASE_QUANTITY_PRODUCT';

    static CREATE_PRODUCT_PENDING = 'CREATE_PRODUCT_PENDING';
    static CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
    static CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR';
}

export default ProductType;