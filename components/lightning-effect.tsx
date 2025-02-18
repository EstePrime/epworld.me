export function LightningBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-10 w-72 h-[41em] bg-[#E6DAC6] rounded-full blur-[8em] animate-lightning" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E6DAC6] rounded-full blur-[8em] animate-lightning [animation-delay:2s]" />
        </div>
    );
}