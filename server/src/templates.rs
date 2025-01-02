use askama::Template;

#[derive(Template)]
#[template(path = "index.html")]
pub struct IndexTemplate {}

pub struct Technology {
    pub href: &'static str,
    pub name: &'static str,
}

#[derive(Template)]
#[template(path = "about.html")]
pub struct AboutTemplate {
    pub technologies: &'static [Technology],
    pub version: &'static str,
}
