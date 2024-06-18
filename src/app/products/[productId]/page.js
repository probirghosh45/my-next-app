const DynamicPage = ({params , searchParams}) => {
    // console.log(searchParams);
    return (
        <div>
            <h1>Dynamic Page No. {params.productId}</h1>
        </div>
    );
};

export default  DynamicPage;