import ProductGrid from "../components/ProductGrid";

function GalleryPage ({ products, loading}){
    return (
        <main className="mx-auto max-w-6xl px-6 py-10">
            <section
                className="relative mb-10 overflow-hidden rounded -3xl bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 p-10 text-white shadow-xl md:p-14"
            >
                <div className="absolute -right-16 -top-16 h-64 w-64 w-64 rounded-full bg-white/10"></div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Product Gallery</p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">Discover our Products</h2>
                <p className="mt-3 text-white/80">
                    {products.length} items available . by [John Matthew Olano]
                </p>
                <div className="mt-6 space-y-2 text-sm">
                    <a
                        href="https://showcase-gallery-6c5k.onrender.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-fit break-all underline decoration-white/50 underline-offset-4 transition hover:text-white/75"
                    >
                        https://showcase-gallery-6c5k.onrender.com
                    </a>
                    <a
                        href="https://github.com/altjohn143/showcase-gallery.git"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-fit break-all underline decoration-white/50 underline-offset-4 transition hover:text-white/75"
                    >
                        https://github.com/altjohn143/showcase-gallery.git
                    </a>
                    <a
                        href="https://showcase-gallery-xi.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-fit break-all underline decoration-white/50 underline-offset-4 transition hover:text-white/75"
                    >
                        https://showcase-gallery-xi.vercel.app
                    </a>
                </div>
            </section>
            {loading ? (
             <p className="py-20 text-center text-slate-400">Loading Products...</p>
            ) : (
                <ProductGrid products={products}/>
            )}
        </main>
    );
}

export default GalleryPage;
