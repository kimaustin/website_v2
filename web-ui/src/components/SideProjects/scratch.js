<WorkListContainer id="topWorks"
        ref={ListContainerRef}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.5,
          } }}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.8,
        }}
      >
        <Marker />
        <ClickableArea to={"/" + projectValue + "/works"} id={"proj1"}>View Details →</ClickableArea>
        <WorkActions
          as={motion.div}
          initial={{ y: '150px' }}
          animate={{ y: 0, position: 'fixed' }}
          exit={{ y: '150px', transition: {
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.5,
                delay: 0.1
            } }}
          transition={{
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.5,
              delay: 0.1
          }}
        >
          <WorkName>{projectValue}</WorkName>
          <TagsContainer>{tagsDisplayed}</TagsContainer>
          <Details
            to={"/" + projectValue + "/works"}
            id={"proj" + projectValue}
          >
            Details  →
          </Details>
          {visit_link}
        </WorkActions>

        {projects_list}

      </WorkListContainer>