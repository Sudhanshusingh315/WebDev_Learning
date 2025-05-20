// server component

export default async function reviewProduct({
    params,
}: {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
}) {
    const { productId, reviewId } = await params;

    return (
        <>
            <div>
                <h1>ProductId is {productId}</h1>
                <h2>review is {reviewId}</h2>
            </div>
        </>
    );
}
