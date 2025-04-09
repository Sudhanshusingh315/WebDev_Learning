import "./App.css";
export default function PhotoControl({ pageNo, setPageNo }) {
    const nextThree = Array.from({ length: 3 }, (_, index) => {
        return pageNo + index;
    });
    const PrevThree = Array.from({ length: 3 }, (_, index) => {
        return pageNo - 1 - index;
    })
        .filter((elment) => elment > 0)
        .reverse();
    console.log("prevthree", PrevThree);
    console.log("nextThree", nextThree);

    const pageNoList = [...PrevThree, ...nextThree];
    console.log("page no list", pageNoList);
    const handleNext = () => {
        setPageNo((prev) => prev + 1);
    };
    const handlePrev = () => {
        setPageNo((prev) => {
            if (prev <= 0) return prev;
            return prev - 1;
        });
    };

    return (
        <div className="photo-control">
            <div onClick={handlePrev}>&lt;</div>
            {pageNoList?.map((value) => {
                return (
                    <div
                        className={pageNo === value ? "onThisPage" : ""}
                        onClick={() => {
                            setPageNo(value);
                        }}
                    >
                        {value}
                    </div>
                );
            })}
            <div onClick={handleNext}>&gt;</div>
        </div>
    );
}
