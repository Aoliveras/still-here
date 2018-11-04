import React from 'react';

export default () => {
    return (
        <div>
            <div className="ui center aligned container text" style={{ margin: "65px 0 45px 0" }}>
                <div className="content" style={{ padding: "25px", border: "1px solid lightgrey", borderRadius: "20px" }}>
                    <h1 style={{ fontSize: "45px"}}>Here to help.</h1>
                    <hr/>
                    <h2>Finding help can be hard, let us make it a bit easier for you.</h2>
                    <h2>Below are links to even more helpful resources.</h2>
                </div>
            </div>
            <div className="ui container text" style={{ marginTop: "85px" }}>
                <div className="ui center aligned container">
                    <h2 style={{ fontSize: "35px", textDecoration: "underline" }}>Helpful Websites</h2>
                </div>
                <h2><a href="http://www.7cups.com/">7cups.com</a></h2>
                <p>(FREE anonymous and confidential conversations with trained active listeners)</p>
                <h2><a href="https://www.nbcnews.com/better/health/mental-health-services-how-get-treatment-if-you-can-t-ncna875176">Tips for Affordable Mental Health Treatment</a></h2>
                <p>Good advice for anyone looking for help</p>
                <h2><a href="https://www.mydepressionteam.com/">MyDepressionTeam.com</a></h2>
                <p>(the social network for those living with depression)</p>
                <h2><a href="http://www.noshameonu.org/s/35079138_815491151986018_7393548344775147520_n-a4es.png">LGBTQ Suicide Prevention Resources</a></h2>
                <h2><a href="http://www.helpyourselfhelpothers.org/">HelpYourselfHelpOthers.org</a></h2>
                <p>Online self assessment tool</p>
                <h2><a href="http://www.nami.org/">NAMI.org</a></h2>
                <p>(FREE support and education for families and individuals seeking help for a wide range of mental illness)</p>
            </div>

            <div className="ui container text" style={{ marginTop: "55px", marginBottom: "100px" }}>
                <div className="ui center aligned container">
                    <h2 style={{ fontSize: "35px", textDecoration: "underline" }}>Helpful Applications</h2>
                </div>
                <h2><a href="https://www.calm.com/">Calm</a></h2>
                <p>(Application for meditation and mental health)</p>
                <h2><a href="https://www.headspace.com/headspace-meditation-app">Headspace</a></h2>
                <p>Meditation and mindfulness application</p>
                <h2><a href="https://www.superbetter.com/">SuperBetter</a></h2>
                <p>(SuperBetter increases resilience - the ability to stay strong, motivated and optimistic even in the face of difficult obstacles.)</p>
                <h2><a href="https://www.happify.com/">Happify</a></h2>
                <p>(Build skills for lasting happiness: Happify turns the latest innovations in the science of happiness into activities and games that help you lead a more fulfilling life.)</p>
                <h2><a href="https://www.talkspace.com/">Talkspace</a></h2>
                <p>(With Talkspace online therapy, anyone can get therapy without traveling to an office.)</p>
            </div>
        </div>
    )
}

