import MainLayout from "../layouts/MainLayout";
// import {Typography} from "@material-tailwind/react";
import {CustomCarousel1} from "../components/gallery/CustomCarousel1";
import {MotoringHubCard} from "../components/gallery/MotoringHubCard";
import {WhiteBtn1} from "../components/gallery/WhiteBtn1";
import hampshire from '../assets/images/selleasy.png'
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
                "View Video"
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
export default function DetailVideo() {
    const [open,
        setOpen] = useState(false)
    return (
        <MainLayout>
            <div
                className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto bg-white justify-end items-start gap-[50px] flex pt-5">
                <div
                    className="px-4 py-2.5 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-2 flex">
                    <div onClick={()=>setOpen(true)}
                        className="text-gray-800 text-sm font-semibold font-['Barlow'] uppercase leading-tight tracking-tight">share</div>
                    <div className="w-4 h-4 relative"><ShareSVG/></div>
                </div>
            </div>
            <ShareModal open={open} setOpen={setOpen}/>

            <div
                className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto  py-[50px] bg-white justify-center items-start gap-[50px] flex xl:flex-row flex-col-reverse">
                <div
                    className="xl:w-1/2 w-full flex-col justify-start items-start gap-6 inline-flex">
                    <div
                        className="self-stretch text-neutral-800 text-5xl font-bold font-['Barlow Condensed'] uppercase scale-y-110">New arrival at tmc - 2019 Audi s3 quattro black edition auto</div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-['Barlow'] leading-loose">Say
                        hello to one of our newest arrivals to the showroom, here at The Motor Company
                        in Oakhanger, near Bordon, Hampshire. With 296bhp, this Black Edition S3 Quattro
                        looks fantastic in contrasting white. It's a 1 owner car with 23,577 miles - and
                        comes with a Full Audi Service History, so it really is a great example of this
                        highly sought-after vehicle. Contact us for more information, or click on the
                        button below to see a wider selection of high quality used vehicles available
                        here at TMC.<br/><br/>Check
                        out the before and after difference to our used pick-up, SUV and 4x4 showroom
                        with this special time-lapse footage! We had smart new carpets installed in time
                        for the New Year, and we're delighted with how they add to the ambience in our
                        bright new showspace in Oakhanger, near Bordon, Hampshire. We are TMC - The
                        Motor Company.<br/><br/>We
                        are specialists in high-quality used 4x4, SUV and pick-up trucks covering
                        Hampshire, Surrey, Sussex, London, the South East and beyond. If you're looking
                        for a particular used pick-up truck, 4x4 or SUV - get in touch to see how we can
                        help you find your next used vehicle.
                        <br/><br/>We can also buy your used SUV, 4x4, pick-up truck or whatever used
                            vehicle you're looking to sell. We can offer you a higher price than you might
                            have expected, settle outstanding finance, and save you a lot of hassle and time
                            on your sale. Just click here for more information. Or, to see our latest
                            selection of high quality used vehicles for sale, click the link below.</div>
                </div>
                <div
                    className="xl:w-1/2 w-full self-stretch flex-col justify-start items-center gap-8 inline-flex">
                    <div className="w-fit">
                        <img className="rounded-3xl w-fit" src={hampshire} alt="'adsf"/>
                    </div>
                    <div
                        className="max-w-[1240px] bg-gray-100 w-full mx-auto  px-8 py-[50px] bg-neutral-100 rounded-3xl flex-col justify-start items-center gap-8 hidden xl:flex">
                        <div
                            className="w-[400px] mx-auto  self-stretch text-center scale-y-110 text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">
                            GEt a Quick Valuation on your vehicle
                        </div>
                        <div className="md:w-fit md:mx-auto mt-8">
                            <div
                                className="md:w-[454px] md:px-0 px-5 justify-start items-center gap-6 flex md:flex-row flex-col">
                                <div
                                    className="grow shrink w-full basis-0 h-12 px-6 py-3 bg-gray-800 rounded-[100px] shadow border border-gray-900 justify-center items-center gap-1 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                        <Link to="/contact-us">enquire today</Link>
                                    </div>
                                </div>
                                <div
                                    className="grow shrink w-full  basis-0 h-12 px-6 py-3 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-1 flex">
                                    <div
                                        className="text-neutral-800 text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                        <Link to="/contact-us">VIDeo enquiry</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="max-w-[1240px] xl:hidden bg-gray-100 w-full mx-auto my-10  px-8 py-[50px] bg-neutral-100 rounded-3xl flex-col justify-start items-center gap-8">
                <div
                    className="self-stretch w-[400px] mx-auto text-center scale-y-110 text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">
                    GEt a Quick Valuation on your vehicle
                </div>
                <div className="md:w-fit md:mx-auto mt-8">
                    <div
                        className="md:w-[454px] md:px-0 px-5 justify-start items-center gap-6 flex md:flex-row flex-col">
                        <div
                            className="grow shrink w-full basis-0 h-12 px-6 py-3 bg-gray-800 rounded-[100px] shadow border border-gray-900 justify-center items-center gap-1 flex">
                            <div
                                className="text-white text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                <Link to="/contact-us">enquire today</Link>
                            </div>
                        </div>
                        <div
                            className="grow shrink w-full  basis-0 h-12 px-6 py-3 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-1 flex">
                            <div
                                className="text-neutral-800 text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
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
                        &nbsp;videos
                    </h1>
                </div>
                <div className="hidden gap-3 lg:flex">
                    <Link to="/motoring-hub/videos/">
                        <WhiteBtn1 name="view all videos"/>
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
                <Link to="/motoring-hub/videos/">
                    <WhiteBtn1 name="view all videos"/>
                </Link>
            </div>
        </MainLayout>
    )
}