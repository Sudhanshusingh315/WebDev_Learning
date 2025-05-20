export default async function Reviews({
    params,
}: {
    params: Promise<{
        productId: string;
    }>;
}) {
    const { productId } = await params;
    return (
        <div>
            <h1>Prodcut Id: {productId}</h1>
            <p>Review 1</p>
            <p>Review 2</p>
            <p>Review 3</p>
            <p>Review 4</p>
            <p>Review 5</p>
        </div>
    );
}
