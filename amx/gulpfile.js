var gulp=require("gulp");
//下面4个都是gulp的插件
var cssmin=require("gulp-cssmin");
var uglify=require("gulp-uglify");
var babel=require('gulp-babel');
var nokey=require('gulp-tinypng-nokey');

//布置任务
//gulp.task("default",()=>{
//	console.log("开始跳舞");//任务需要做什么操作，就在这里面写
//})

//复制所有的文件
//gulp.task("copyAll",()=>{
//	gulp.src("./src/*/*")
//		//差一些插件操作
//	    .pipe(gulp.dest("./dist"));
//})

//复制css并且压缩了css
//gulp.task("mincss",()=>{
//	gulp.src("./src/css/*")
//		.pipe(cssmin())
//		.pipe(rename({suffix: '.dy'}))
//	    .pipe(gulp.dest("./dist"));
//})

//复制js并且压缩js
//gulp.task("minjs",()=>{
//	gulp.src("./src/js/*")
//		.pipe(uglify())
//	    .pipe(gulp.dest("./dist"));
//})

//JS降价为ES5，并且压缩
//gulp.task("jjjs",()=>{
//	gulp.src("./src/js/*")
//		.pipe(babel())
//		.pipe(uglify())
//	    .pipe(gulp.dest("./dist"));
//})

//gulp.task("minimg",()=>{
//	gulp.src("./src/images/*.{png,jpg,jpeg,gif,ico}")
//		.pipe(nokey())
//		.pipe(gulp.dest("./dist"));
//})

gulp.task("perfect",()=>{
	gulp.src("./src/*/*.css")
		.pipe(cssmin())
		.pipe(gulp.dest("./dist"));
		
	gulp.src("./src/*/*.js")
		.pipe(babel())
		.pipe(uglify())
	    .pipe(gulp.dest("./dist"));
	    
	gulp.src("./src/*/*.{png,jpg,jpeg,gif,ico}")
		.pipe(nokey())
		.pipe(gulp.dest("./dist"));
		
	gulp.src("./src/*/*.html")
		.pipe(gulp.dest("./dist"));
})
