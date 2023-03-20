let project_names = projects.map((project) => {
    // means no content displayed
    var zerofilled = ('0'+project.id).slice(-2);

    const workItem = {
      hidden: { x: '0'},
      show: { X: '10vw'}
    }

    const tagsDisplayed = project.tags.map((tag, index) => (
      <ProjTags tag={tag} key={tag.id} index={index} tagsLength={project.tags.length}/>
    ));
    
    let index_str = "proj" + project.id;

    if (project.id < 16) {
      if (hoverAllowed) {
        if (filterType == 0 || project.type == filterType) {
          return (
            <WorkItem to={"/" + project.id + "/works"}>
            {/* <WorkItem onClick={() => handleDisplayProject(project.id)} filteredOut={false} id={index_str}          > */}
              {/* <WorkName onClick={() => handleDisplayProject(project.id)} to={100} smooth={true} duration={500} spy={true}  */}
              <WorkName>{project.name}</WorkName>
              <WorkIndex>{zerofilled}</WorkIndex> 
              <TagsContainer>{tagsDisplayed}</TagsContainer>
              <TagsContainer2>
                <WorkDate>{project.semester}</WorkDate> 
                <WorkType>{project.class}</WorkType>
              </TagsContainer2>
              
              <Image hoverAllowed={hoverAllowed}>
                  <img src={"imgs/" + project.imgs[0]} />
              </Image>
            </WorkItem>
          );
        } else {
          return (
            // <></>
            <WorkItem onClick={() => handleDisplayProject(project.id)} filteredOut={true} id={index_str} > 
            {/* <WorkItem to="/"> */}
              <WorkIndex>{zerofilled}</WorkIndex> 
              <TagsContainer>{tagsDisplayed}</TagsContainer>
              <TagsContainer2>
                <WorkDate>{project.semester}</WorkDate> 
                <WorkType>{project.class}</WorkType>
              </TagsContainer2>
              <WorkName>{project.name}</WorkName>
              
              <Image hoverAllowed={hoverAllowed}>
                  <img src={"imgs/" + project.imgs[0]} />
              </Image>
            </WorkItem>
          );
        }
      } else {
        if (filterType == 0 || project.type == filterType) {
          if (project.id == projectDisplayed) {
            return (
              // <WorkItem onClick={() => handleDisplayProject(project.id)} filteredOut={false} selected={true} id={index_str}            >
            <WorkItem to="/">
                <WorkIndex>{zerofilled}</WorkIndex> 
                <TagsContainer>{tagsDisplayed}</TagsContainer>
                <TagsContainer2>
                  <WorkDate>{project.semester}</WorkDate> 
                  <WorkType>{project.class}</WorkType>
                </TagsContainer2>
                <WorkName>{project.name}</WorkName>
              </WorkItem>
            );
          } else {
            return (
              <WorkItem filteredOut={true} id={index_str}>

              {/* <></> */}
            {/* <WorkItem to="/"> */}

                <WorkIndex>{zerofilled}</WorkIndex> 
                <TagsContainer>{tagsDisplayed}</TagsContainer>
                <TagsContainer2>
                  <WorkDate>{project.semester}</WorkDate> 
                  <WorkType>{project.class}</WorkType>
                </TagsContainer2>
                <WorkName>{project.name}</WorkName>
              </WorkItem>
            );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
          }
        } else {
          return (
            <WorkItem to="/">
              {/* <WorkItem filteredOut={true} id={index_str}            > */}
                <WorkIndex>{zerofilled}</WorkIndex> 
                <TagsContainer>{tagsDisplayed}</TagsContainer>
                <TagsContainer2>
                  <WorkDate>{project.semester}</WorkDate> 
                  <WorkType>{project.class}</WorkType>
                </TagsContainer2>
                <WorkName>{project.name}</WorkName>
              </WorkItem>
            // <WorkItem to={project.id + "/works"} filteredOut={true}><WorkName filteredOut={true} oddItem={isOdd(project.id)}>{project.name} <Image><img src={"imgs/" + project.imgs[0]} style={{height: '100%', width: '100%'}}></img></Image></WorkName></WorkItem>
          );
        }
      }
    }
  });