import store from './store';

export async function api_get(path) {
    let text = await fetch("http://v2.austinkim.works/api" + path, {});
    let resp = await text.json();
    return resp.data
}

//------------------------------PROJECTS------------------------------

export function fetch_projects() {
    api_get("/projects").then((data) => store.dispatch({
        type: 'projects/set',
        data: data,
    }));
}

export function my_func() {

}

export function get_all_projects() {
    console.log("getting all projs...");
    api_get("/projects").then((data) => localStorage.setItem('projects', JSON.stringify(data)));
    
    setTimeout(my_func, 2000);
    console.log("got projects", localStorage.getItem('projects'));
}

export function get_project(id) {
    console.log("it's being called");
    let path = "/projects/" + id
    return api_get(path);
}

//------------------------------DEFAULT------------------------------

export function load_defaults() {
    console.log("loading defaults...");
    fetch_projects();
}

