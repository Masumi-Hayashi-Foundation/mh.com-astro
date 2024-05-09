import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dataContainer: {
        padding: '4rem 1rem 1rem 0rem',
        maxWidth: '40rem'        
    },
    body1: {
        
    },
    label: {
        fontWeight: 800,
        color: theme.palette.primary.main,
        marginTop: '.25rem',
        display: 'inline-block' 
    },
    researchHeading: {
        fontWeight: 800,
        color: '#f00'
    },
    factSheet: {
        color: theme.palette.tertiary.main,
    },
    subCat: {
        marginLeft: '1rem',
    },
    monospace: {
        
        marginLeft: '.5rem'
    },
    populationOrigins: {
        marginTop: '1rem',
        marginBottom: '.5rem'
    },
    population: {
        marginLeft: '1.5rem',
        marginTop: '.5rem',
        fontFamily: 'monospace',
    },
    smMap: {
        float: 'right',
        margin: '1.5rem 0 1.5rem 1.5rem'
    },
    list: {
        marginLeft: '1rem       '
    }
}));


export default function ManzanarData() {
    const classes = useStyles();

    return (
        <div className={classes.dataContainer}>
            <Typography variant='h3' className={classes.researchHeading}>
                Research: Manzanar Relocation Camp</Typography>
            <Typography variant='body1' className={classes.factSheet}>
                <p><span className={classes.label}>Location:</span> Inyo County, California, in the Owens Valley, 225 miles north of Los Angeles.</p>

                <img src={`usmap.sm.gif`} className={classes.smMap} alt="small map of Japanese-American internment camps in western USA" />

                <p><span className={classes.label}>Land: </span> Land controlled by the City of Los Angeles for its municipal water supply.</p>

                <p><span className={classes.label}>Size:</span> 6,000 acres.</p>

                <p><span className={classes.label}>Climate: </span> Desert, extreme winters and summers. Mt. Whitney and Mt. Williamson could be seen in the distance making it one of the most beautiful of the camp sites.</p>
                
                <p className={classes.populationOrigins}><span className={classes.label}>Population Origins: </span>Primarily Los Angeles County (8,828). </p>


                <p><span className={classes.label}>Opening date: </span> June 1, 1942;
                <br />Manzanar began as a Wartime Civil Control Administration administered "Assembly Center", and opened on March 22, 1942; it came under War Relocation Authority jurisdiction on June 1, 1942.</p> 
                <p><span className={classes.label}>Date of peak: </span> September 22, 1942.</p>                
                <p><span className={classes.label}>Peak population:</span> 10,046.</p>
                <p><span className={classes.label}>Closing Date: </span> Novermber 21, 1945.</p>
                

                <p><span className={classes.label}>Project director:</span> Roy Nash, Harvey N. Coverley, Solon T. Kimball, and Ralph P. Merrit. </p>

                <p><span className={classes.label}>Community Analysts: </span> John de Young and Morris E. Opler.</p>

                <p><span className={classes.label}>Newpaper(s): </span> <em>Manzanar Free Press</em> (April 11, 1942 to September 8, 1945); the paper started while Manzanar was an "assembly center" and continued to publish through its transfer to WRA jurisdiction. </p>

                <p><span className={classes.label}>% who answered question 28 of the loyalty questionnaire positively: </span> 86.9%</p>

                <p><span className={classes.label}>Number and percentage of eligible citizen males inducted directly into ARMED FORCES: </span> 174 (2.5%).</p>

                <p><span className={classes.label}>Industry: </span> Manzanar had a camouflage net factory which operated from June to December 1942; also a garment factory, a cabinet shop, and a mattress factory which produced goods for internal consumption. </p>

                <p><span className={classes.label}>History: </span> Manzanar was probably the most closely guarded of all the camps, due in part to its origin as a WCCA camp, to its location within the Western Defense Command's restricted zone, and the extreme hostility of the local population.</p>

                <p>Counting its WCCA director (Clayton Triggs), Manzanar had five directors/managers in its first eight months. Merrit took over as director on November 19, 1942 and remained in this position until the camp's closing.</p>

                <p>Manzanar was a relatively turbulent center; the Manzanar Incident of December 1942 exposed deep rifts within the poplulation. </p>


                <p><span className={classes.label}>For further reading:</span></p>
                
                <ul className={classes.list}>
                <li>Photographic studies of Manzanar include Ansel Adams' <em>Born Free and Equal: Photographs of the Loyal Japanese Americans of Manzanar Relocation Center, Inyo County, California</em>.(New York: US Camera, 1944);</li>

                <li>Ansel Adams and Toyo Miyatake, <em>Two Views of Manzanar: An Exhibition of Photographs</em>. Los Angeles: Frederick S. Wight Art Gallery, University of California, Los Angeles, 1978; </li>

                <li>John Armor and Peter Wight, <em>Manzanar</em>. Photographs by Ansel Adams. Commentary by John Hersey. (New York: Times Books, 1988). </li>
                </ul>
                
                <p><span className={classes.label} >Source:</span> <em>Japanese American History: An A to Z Reference, 1868 to the Present</em>, by Brian Niiya. New York: Facts on File, 1993. This information is provided with the permission from the Japanese American National Museum and Brian Niiya, 1997. 
                </p>
                
                
            </Typography>
        </div>
    );
} 