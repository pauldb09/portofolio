export const DecoratedText = ({ word }: any) => {
    return (
        <a
            className={`hover:text-blue underline decoration-sky-500 underline decoration-4 underline underline-offset-8`}
            style={{
                textDecorationColor: "#15ADE2",
            }}
        >
            {word}
        </a>
    );
};
