export class BaseAction {
    constructor(name, api, storeName) {
        this.name = name.toUpperCase()
        this.api = api
    }

    ////////////////////////////////////////////////////////////
    getList = (option = {}) => {
        return dispatch => {
            dispatch({
                type: `FETCH_${this.name}_PENDING`
            })
            this.api.getList(option)
                .then(res => {
                    dispatch({
                        type: `FETCH_${this.name}_SUCCESS`,
                        payload: res.result.object
                    })
                })
                .catch(error => {
                    dispatch({
                        type: `FETCH_${this.name}_ERROR`,
                        payload: error
                    })
                })
        }
    }

    ////////////////////////////////////////////////////////////
    delete(id, option = {}) {
        return dispatch => {
            dispatch({
                type: `DELETE_${this.name}_PENDING`,
                payload: id
            })
            this.api.delete(id, option)
                .then(res => {
                    dispatch({
                        type: `DELETE_${this.name}_SUCCESS`,
                        payload: res.result.object
                    })
                    return res
                })
                .catch(error => {
                    dispatch({
                        type: `DELETE_${this.name}_ERROR`,
                        payload: error
                    })

                })
        }

    }
    
    ////////////////////////////////////////////////////////////
    create = (body, option = {}) => {
        return dispatch => {
            dispatch({
                type: `ADD_${this.name}_PENDING`
            })
            this.api.create(body, option)
                .then(res => {
                    dispatch({
                        type: `ADD_${this.name}_SUCCESS`,
                        payload: res.result.object
                    })
                })
                .catch(error => {
                    dispatch({
                        type: `ADD_${this.name}_ERROR`,
                        payload: error
                    })

                })
        }
    }

    ////////////////////////////////////////////////////////////
    unshift(body) {
        return {
            type: `UNSHIFT_${this.name}`,
            payload: body
        }
    }

    ////////////////////////////////////////////////////////////
    getItem(id, option) {
        return dispatch => {
            dispatch({
                type: `GET_${this.name}_PENDING`,
                payload: id
            })
            this.api.getItem(id, option)
                .then(res => {
                    dispatch({
                        type: `GET_${this.name}_SUCCESS`,
                        payload: res.result.object
                    })
                })
                .catch(error => {
                    dispatch({
                        type: `GET_${this.name}_ERROR`,
                        payload: error
                    })

                })
        }
    }

    ////////////////////////////////////////////////////////////
    update(id, body, option = {}) {
        return dispatch => {
            dispatch({
                type: `UPDATE_${this.name}_PENDING`,
                payload: id
            })
            this.api.update(id, body, option)
                .then(res => {
                    dispatch({
                        type: `UPDATE_${this.name}_SUCCESS`,
                        payload: res.result.object
                    })
                })
                .catch(error => {
                    dispatch({
                        type: `UPDATE_${this.name}_ERROR`,
                        payload: error
                    })

                })
        }
    }
}
