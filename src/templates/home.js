import "../css/Timeline.css";

function Home() {
    return (
        <div>
            <h2> Home </h2>
            <div class="uk-container">
                <center>
                    <h2> At A Glance </h2>
                </center>
                <div class="timeline">
                    <div class="container left">
                        <div class="date">15 Dec</div>
                        <i class="icon fa fa-home"></i>
                        <div class="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">22 Oct</div>
                        <i class="icon fa fa-gift"></i>
                        <div class="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;