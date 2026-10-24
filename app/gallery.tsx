import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
};


export default () => {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >

            <div className="grid-item">
                <img className="saturate-0 hover:saturate-100 transition-all" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Restrained contemporary home framed by its landscape" />
            </div>
            <div className="grid-item">
                <img className="saturate-0 hover:saturate-100 transition-all" src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Close view of a quiet, light-filled interior" />
            </div>

            <div className="grid-item">
                <img className="saturate-0 hover:saturate-100 transition-all" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Sunlight settling into a softly textured interior" />
            </div>

            <div className="grid-item">
                <img className="saturate-0 hover:saturate-100 transition-all" src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Sculptural exterior lines against an open sky" />
            </div>


            <div className="grid-item">
                <img className="saturate-0 hover:saturate-100 transition-all" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Minimal white home seen through a leafy foreground" />
            </div>


            <div className="grid-item">
                <img className="saturate-0 hover:saturate-100 transition-all" src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Natural textures and considered furniture in a modest interior" />
            </div>
        </Masonry>
    );
};