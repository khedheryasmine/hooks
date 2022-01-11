import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
const data = {
    cardData: [
        {
            id: Math.random(),
            img: img1,
            title: 'harry potter',
            desc: 'A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil.',
            link : <link src="https://www.youtube.com/watch?v=mObK5XD8udk" /> ,
            rate: '8.4'
        },
        {
            id: Math.random(),
            img: img2,
            title: 'charlie st.cloud',
            desc: ' Charlie St. Cloud (Zac Efron) is a small-town sailing hero of whom great things are expected. But he loses all ambition after a car accident that he “miraculously” survives but kills his kid brother, Sam (Charlie Tahan). Afterward, to quote from another film, Charlie sees dead people.',
            link:  <link src="https://www.youtube.com/watch?v=Xxltat2zIG4"/> ,
            rate: '9.3'
        },
        {
            id: Math.random(),
            img: img3,
            title: 'the hangover',
            desc: 'The Hangover tells the story of Phil Wenneck, Stu Price, and Alan Garner, who travel to Las Vegas for a bachelor party to celebrate the impending marriage of their friend, Doug Billings. However, Phil, Stu, and Alan have no memory of the previous nights events and must find Doug before the wedding can take place.',
            link: < link src="https://www.youtube.com/watch?v=tcdUhdOlz9M"/> ,
            rate: '5.3'
        },
        {
            id: Math.random(),
            img: img4,
            title: 'the basketball diaries',
            desc: ' The Basketball Diaries is a 1995 American biographical crime drama film directed by Scott Kalvert and based on an autobiographical novel by the same name written by Jim Carroll. It tells the story of Carrolls teenage years as a promising high school basketball player and writer who develops an addiction to heroin.',
            link: <link src="https://www.youtube.com/watch?v=-Zc7T0vUpj0" />,
            rate: '9.2'
        }
    ]

}


export default data;
