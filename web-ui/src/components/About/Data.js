//TODO These data files can filter into pre-existing componenets and fill up data. 
// Can work for all portfolio projects if categories are set up properly

export const homeObj1 = {
    id: 'proj1',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Identity and Brand Design',
    headline: 'Personal Identity Project Series',
    description: 'This is my project description for the personal identity project.',
    buttonLabel: 'Get Started',

    //TODO for organizing components with columns by t/f which columns start
    imgStart: false,
    img: require('../../imgs/svg-1.svg').default,
    alt: 'Car',
    dark: false,
    // for the button styling, but can be used for other element styling.
    //TODO -----> using this system can you maybe change the colors of the website with one click?
    primary: true,
    darkText: true


    //TODO Try to get a button click to change color of site    
}; 

export const homeObj2 = {
    id: 'proj2',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Identity and Brand Design',
    headline: 'Another Project Series',
    description: 'This is my project description for project 2.',
    buttonLabel: 'Get Started',

    // for organizing components with columns by t/f which columns start
    imgStart: true,
    img: require('../../imgs/svg-1.svg').default,
    alt: 'Car',
    dark: true,
    // for the button styling, but can be used for other element styling.
    // -----> using this system can you maybe change the colors of the website with one click?
    primary: false,
    darkText: false
}; 


//TODO Get hover to show up image