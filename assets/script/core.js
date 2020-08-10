core = {
    type : "teacher",
    init : function() {
        if ( this.type == 'teacher' ) {
            $(".student-content").hide();
        } else {
            $(".teacher-content").hide();
        }
    }
};
core.init();