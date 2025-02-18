export function LightningBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-lightning" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-lightning [animation-delay:2s]" />
        </div>
    );
}