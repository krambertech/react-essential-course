import React from 'react';

import './AboutPage.less';

const AboutPage = React.createClass({
    render() {
        return (
            <div className='AboutPage'>
                <h2 className='title'>
                    This is messages application
                </h2>

                <div className='text'>
                    <p>Etiam imperdiet imperdiet orci. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Praesent egestas tristique nibh. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti.</p>

                    <p>Fusce commodo aliquam arcu. Sed fringilla mauris sit amet nibh. Curabitur ullamcorper ultricies nisi. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>

                    <p>Nam eget dui. In hac habitasse platea dictumst. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Quisque ut nisi. Duis leo.</p>

                    <p>Cras varius. Donec vitae sapien ut libero venenatis faucibus. Etiam ultricies nisi vel augue. In consectetuer turpis ut velit. Nam at tortor in tellus interdum sagittis.</p>

                    <p>Nunc sed turpis. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla porta dolor.</p>
                </div>
            </div>
        );
    }
});

export default AboutPage;
