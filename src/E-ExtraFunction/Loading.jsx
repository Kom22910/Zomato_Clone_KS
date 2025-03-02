



import React from 'react';

const Loading = ({ loading }) => {
    return (
        <>

            {
                loading &&
                <div className="col-12 loading">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }





        </>
    )
}

export default Loading;