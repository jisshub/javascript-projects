// class for tooltip add
class ToolTip{
    getTooltip(){
        const toolTips = document.querySelectorAll('.alt');
        toolTips.forEach(toolTip => {
            toolTip.setAttribute("title", 'More Info')
        });
    }
}

// class for single project
class ProjectItem{

}

// class for project list
class ProjectList{

}

// class for entire app
class App{
    
}

const toolTipObj = new ToolTip();
toolTipObj.getTooltip();
