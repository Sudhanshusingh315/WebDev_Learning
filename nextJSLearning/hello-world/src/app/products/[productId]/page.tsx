export default async function SpecificProduct({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const producId = (await params).productId;

    return <h1>Details about product {producId}</h1>;
}
