import MainLayout from "../layouts/MainLayout";
// import {Typography} from "@material-tailwind/react";
import {CustomCarousel1} from "../components/gallery/CustomCarousel1";
import {MotoringHubCard} from "../components/gallery/MotoringHubCard";
import {WhiteBtn1} from "../components/gallery/WhiteBtn1";
import detailarticle from '../assets/images/detailarticle.png'
// import hampshire1 from '../assets/images/hampshire1.png'
import {ReactComponent as ShareSVG} from '../components/svg/share.svg'
import {Link} from "react-router-dom";
import {useState} from "react";
import {ShareModal} from "../components/ShareModal";

const data = [
    {
        label: "All",
        value: "All",
        desc: [ < MotoringHubCard name = {
                "A New TMC Arrival - Audi S3 Quattro Black Edition"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
                        "height=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
                        "o.jpg?width=525&height=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />
        ]
    }, {
        label: "Ford",
        value: "Ford",
        desc: [ < MotoringHubCard name = {
                "A New TMC Arrival - Audi S3 Quattro Black Edition"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
                        "height=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
                        "o.jpg?width=525&height=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />
        ]
    }, {
        label: "Mistubishi",
        value: "Mistubishi",
        desc: [ < MotoringHubCard name = {
                "A New TMC Arrival - Audi S3 Quattro Black Edition"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
                        "height=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
                        "o.jpg?width=525&height=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />
        ]
    }, {
        label: "Honda",
        value: "Honda",
        desc: [ < MotoringHubCard name = {
                "A New TMC Arrival - Audi S3 Quattro Black Edition"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
                        "height=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />, < MotoringHubCard name = {
                "TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "view article"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
                        "o.jpg?width=525&height=295&mode=crop&scale=both"
            }
            url = {
                "/motoring-hub/video-detail"

            } />
        ]
    }
];
export default function DetailArticle() {
    const [open,
        setOpen] = useState(false)
    return (
        <MainLayout>
            <div
                className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto bg-white justify-end items-start gap-[50px] flex pt-5">
                <ShareModal open={open} setOpen={setOpen}/>

                <div
                    className="px-4 py-2.5 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-2 flex">
                    <div
                        onClick={() => setOpen(true)}
                        className="text-gray-800 text-sm font-semibold font-['Barlow'] uppercase leading-tight tracking-tight">share</div>
                    <div className="w-4 h-4 relative"><ShareSVG/></div>
                </div>
            </div>
            <div
                className="float-right sm:px-[50px] px-5 md:px-[100px] py-5 w-full lg:hidden items-center justify-center">
                <img
                    src={detailarticle}
                    alt="detailarticle"
                    className="w-full h-full rounded-xl self-center my-auto"/>
            </div>
            <div
                className="max-w-[1440px] w-full mx-auto px-[20px] xl:px-[100px] md:px-[50px] pt-8 pb-[50px] bg-white  clear-both">
                <div className=" flex-col justify-start items-start gap-6 flex">
                    <div
                        className="self-stretch text-neutral-800 text-5xl font-bold font-['Barlow Condensed'] uppercase leading-[56px] clear-both w-full">Essential Maintenance Tips Used for van or truck</div>
                    <div
                        className="self-stretch  clear-both text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose">When
                        it comes to owning and operating commercial vehicles, proper maintenance is
                        crucial for ensuring the longevity and reliability of your vehicles. Neglecting
                        maintenance can lead to costly repairs, reduced fuel efficiency, and even safety
                        hazards. Here are essential maintenance tips that every owner of a used
                        commercial vehicle should follow to keep their vehicles in top condition.</div>
                </div>
                <div
                    className="self-stretch  clear-both flex-col justify-start py-4 items-center gap-2 flex">
                    <div className="self-stretch justify-center items-start gap-[50px] inline-flex">
                        <div className="  w-full flex-col justify-start items-start gap-2 inline-flex ">
                            <div
                                className=" text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-[48px]">1. Regular Oil Changes</div>
                            <div
                                className="self-stretch text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose clear-both block">
                                <div
                                    className="float-right px-4 lg:w-7/12 xl:w-1/2 hidden lg:flex items-center justify-center">
                                    <img
                                        src={detailarticle}
                                        alt="detailarticle"
                                        className="w-full h-full rounded-xl self-center my-auto"/>
                                </div>
                                Regular oil changes are the lifeblood of any vehicle, and this holds true for
                                vans and trucks as well. Engine oil lubricates crucial components, reduces
                                friction, and helps dissipate heat. It's important to follow the manufacturer's
                                recommendations for oil change intervals. Generally, this ranges from every
                                3,000 to 7,500 miles, but it can vary. Fresh oil helps keep the engine running
                                smoothly and extends its life.
                            </div>

                        </div>
                        {/* <div className="w-[657.78px] float-right relative bg-neutral-100 rounded-2xl">
                            <img
                                className="w-[658px] left-0 top-0 absolute rounded-2xl"
                                src="https://via.placeholder.com/658x470"/>
                        </div> */}
                    </div>
                </div>
                <div
                    className="self-stretch  clear-both flex-col justify-start py-4 items-center gap-2 flex">
                    <div
                        className="self-stretch text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-[48px]">2. Keep an Eye on the Transmission</div>
                    <div
                        className="self-stretch text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose">The transmission is another vital component in your van or truck.
                        <br/>Regularly check the transmission fluid levels and inspect for any leaks. If
                            you notice any slipping, hard shifting, or unusual noises, consult a mechanic
                            immediately. Proper transmission maintenance can save you from costly repairs
                            down the road.</div>
                </div>
                <div
                    className="self-stretch flex-col justify-start py-4 items-center gap-2 flex">
                    <div
                        className="self-stretch text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-[48px]">3. Maintain Brake System</div>
                    <div
                        className="self-stretch text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose">A
                        well-functioning brake system is essential for the safety of both the driver and
                        others on the road. Inspect the brake pads, rotors, and brake fluid regularly.
                        If you notice squeaking, grinding, or reduced braking performance, have them
                        checked and replaced if necessary.</div>
                </div>
                <div className="self-stretch  flex-col justify-start items-center gap-2 flex">
                    <div
                        className="self-stretch text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-[48px]">4. Battery Maintenance</div>
                    <div
                        className="self-stretch text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose">A
                        well-functioning brake system is essential for the safety of both the driver and
                        others on the road. Inspect the brake pads, rotors, and brake fluid regularly.
                        If you notice squeaking, grinding, or reduced braking performance, have them
                        checked and replaced if necessary.</div>
                </div>
                <div
                    className="self-stretch py-4 flex-col justify-start items-center gap-2 flex">
                    <div
                        className="self-stretch text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-[48px]">5. Air Filters</div>
                    <div
                        className="self-stretch text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose">Dirty
                        air filters can restrict airflow to the engine, reducing fuel efficiency and
                        engine performance. Regularly inspect and replace both the engine and cabin air
                        filters. This simple maintenance task can improve the quality of the air inside
                        your vehicle and help your engine breathe easier.</div>
                </div>
                <div
                    className="self-stretch flex-col justify-start py-4 items-center gap-2 flex">
                    <div
                        className="self-stretch text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-[48px]">6. Suspension and Steering</div>
                    <div
                        className="self-stretch text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose">The
                        suspension system and steering components are essential for a comfortable and
                        safe ride. Regularly check for signs of wear, such as loose or damaged parts,
                        and have them repaired or replaced as needed. Proper suspension and steering
                        maintenance also ensure that your van or truck handles well and provides a
                        smooth ride.</div>
                </div>
                <div
                    className="self-stretch flex-col justify-start py-4 items-center gap-2 flex">
                    <div
                        className="self-stretch text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-[48px]">7. Regular Checkups</div>
                    <div
                        className="self-stretch text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose">Periodic
                        inspections by a qualified mechanic are essential for catching issues before
                        they become major problems. Professional inspections can identify hidden issues
                        that might not be obvious during routine maintenance. Don't wait for a breakdown
                        or a warning light; schedule regular checkups to keep your vehicle in top
                        condition.</div>
                </div>
                <div
                    className="self-stretch text-neutral-800 text-xl font-normal font-['Barlow'] leading-loose">Proper
                    maintenance is the key to ensuring the longevity and reliability of your used
                    vans and trucks. By following these essential maintenance tips, you can extend
                    the life of your vehicle, improve its safety, and reduce the risk of costly
                    repairs. Taking care of your van or truck is not only good for your wallet but
                    also for your peace of mind when hitting the road. So, invest in the upkeep of
                    your vehicle, and it will reward you with years of reliable service.</div>
            </div>

            <div
                className="max-w-[1240px] xl:hidden w-full mx-auto my-10  px-8 py-[50px] bg-gray-100 rounded-3xl flex-col justify-start items-center gap-8">
                <div
                    className="self-stretch w-[400px] mx-auto  text-center scale-y-110 text-gray-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">
                    GEt a Quick Valuation on your vehicle
                </div>
                <div className="md:w-fit md:mx-auto mt-8">
                    <div
                        className="md:w-[454px] md:px-0 px-5 justify-start items-center gap-6 flex md:flex-row flex-col">
                        <div
                            className="grow shrink w-full basis-0 px-6 py-3 bg-gray-800 rounded-[100px] shadow border border-gray-900 justify-center items-center gap-1 flex">
                            <div
                                className="text-white text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                <Link to="/contact-us">enquire today</Link>
                            </div>
                        </div>
                        <div
                            className="grow shrink w-full  basis-0 px-6 py-3 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-1 flex">
                            <div
                                className="text-gray-800 text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                <Link to="/contact-us">VIDeo enquiry</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] bg-transparent w-full  flex lg:flex-row flex-col justify-between items-center mx-auto lg:pt-[50px] pt-[20px] pb-10">
                <div className=" lg:pb-0 flex flex-wrap justify-center items-center">
                    <h1
                        className="text-gray-800 text-center scale-y-125 font-barlow-condensed text-6xl font-bold leading-10 uppercase tracking-tighter">
                        similar
                    </h1>
                    <h1
                        className="text-center md:text-left text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text font-barlow-condensed text-6xl scale-y-125  font-bold leading-tight uppercase tracking-tighter">
                        &nbsp;articles
                    </h1>
                </div>
                <div className="hidden gap-3 lg:flex">
                    <Link to="/motoring-hub/blog/">
                        <WhiteBtn1 name="view all articles"/>
                    </Link>
                </div>
            </div>

            <div
                className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px]  mx-auto pb-3 lg:pb-10 ">
                <CustomCarousel1>
                    {data[0]
                        .desc
                        .map((item, i) => {
                            if (i % 4 !== 0) 
                                return null;
                            return (
                                <div
                                    key={i}
                                    className="flex bg-white justify-start gap-6 overflow-hidden min-w-[1000px]">
                                    {data[0].desc[i]}
                                    {data[0].desc[i + 1]}
                                    {data[0].desc[i + 2]}
                                    {data[0].desc[i + 3]}
                                </div>
                            );
                        })}
                </CustomCarousel1>
            </div>
            <div className="block mx-auto lg:hidden w-[300px] py-6">
                <Link to="/motoring-hub/blog/">
                    <WhiteBtn1 name="view all articles"/>
                </Link>
            </div>
        </MainLayout>
    )
}