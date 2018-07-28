// paredes internas do labirinto
var walls = [
 {x:1, z:1, orientation:'right'},
 {x:1, z:2, orientation:'right'},
 {x:1, z:3, orientation:'right'},
 {x:1, z:3, orientation:'back'},
 {x:1, z:6, orientation:'front'},
 {x:1, z:6, orientation:'right'},
 {x:1, z:7, orientation:'right'},
 {x:1, z:8, orientation:'right'},
 {x:1, z:9, orientation:'right'},
 {x:1, z:10, orientation:'right'},
 {x:1, z:11, orientation:'right'},
 {x:1, z:12, orientation:'right'},
 {x:1, z:13, orientation:'right'},
 {x:1, z:13, orientation:'back'},

 {x:2, z:2, orientation:'right'},
 {x:2, z:3, orientation:'right'},
 {x:2, z:4, orientation:'right'},
 {x:2, z:5, orientation:'right'},
 {x:2, z:6, orientation:'right'},
 {x:2, z:7, orientation:'right'},
 {x:2, z:8, orientation:'right'},
 {x:2, z:9, orientation:'right'},
 {x:2, z:10, orientation:'right'},
 {x:2, z:11, orientation:'right'},
 {x:2, z:12, orientation:'right'},
 {x:2, z:13, orientation:'right'},

 {x:3, z:1, orientation:'back'},
 {x:3, z:6, orientation:'front'},
 {x:3, z:8, orientation:'back'},
 {x:3, z:13, orientation:'back'},

 {x:4, z:1, orientation:'back'},
 {x:4, z:6, orientation:'front'},
 {x:4, z:6, orientation:'back'},
 {x:4, z:7, orientation:'left'},
 {x:4, z:8, orientation:'left'},
 {x:4, z:13, orientation:'back'},

 {x:5, z:1, orientation:'back'},
 {x:5, z:6, orientation:'front'},
 {x:5, z:6, orientation:'back'},
 {x:5, z:14, orientation:'back'},
 {x:5, z:14, orientation:'left'},

 {x:6, z:1, orientation:'back'},
 {x:6, z:3, orientation:'front'},
 {x:6, z:3, orientation:'left'},
 {x:6, z:4, orientation:'left'},
 {x:6, z:5, orientation:'left'},
 {x:6, z:7, orientation:'left'},
 {x:6, z:8, orientation:'left'},
 {x:6, z:9, orientation:'left'},
 {x:6, z:10, orientation:'left'},
 {x:6, z:11, orientation:'left'},
 {x:6, z:12, orientation:'left'},
 {x:6, z:13, orientation:'left'},
 {x:6, z:14, orientation:'left'},

 {x:7, z:1, orientation:'back'},
 {x:7, z:2, orientation:'right'},
 {x:7, z:3, orientation:'front'},
 {x:7, z:4, orientation:'front'},
 {x:7, z:4, orientation:'left'},
 {x:7, z:5, orientation:'left'},
 {x:7, z:6, orientation:'left'},
 {x:7, z:7, orientation:'left'},
 {x:7, z:8, orientation:'left'},
 {x:7, z:9, orientation:'left'},
 {x:7, z:10, orientation:'left'},
 {x:7, z:11, orientation:'left'},
 {x:7, z:12, orientation:'left'},
 {x:7, z:13, orientation:'left'},
 {x:7, z:13, orientation:'back'},

 {x:8, z:1, orientation:'back'},
 {x:8, z:4, orientation:'back'},
 {x:8, z:4, orientation:'left'},
 {x:8, z:7, orientation:'front'},
 {x:8, z:7, orientation:'left'},
 {x:8, z:8, orientation:'left'},
 {x:8, z:9, orientation:'left'},
 {x:8, z:10, orientation:'left'},
 {x:8, z:10, orientation:'back'},
 {x:8, z:12, orientation:'back'},
 {x:8, z:13, orientation:'left'},

 {x:9, z:1, orientation:'right'},
 {x:9, z:2, orientation:'right'},
 {x:9, z:2, orientation:'back'},
 {x:9, z:2, orientation:'left'},
 {x:9, z:3, orientation:'left'},
 {x:9, z:4, orientation:'front'},
 {x:9, z:4, orientation:'left'},
 {x:9, z:5, orientation:'left'},
 {x:9, z:5, orientation:'back'},
 {x:9, z:7, orientation:'front'},
 {x:9, z:7, orientation:'back'},
 {x:9, z:8, orientation:'left'},
 {x:9, z:9, orientation:'left'},
 {x:9, z:9, orientation:'back'},
 {x:9, z:11, orientation:'front'},
 {x:9, z:12, orientation:'back'},
 {x:9, z:14, orientation:'front'},
 {x:9, z:14, orientation:'back'},
 {x:9, z:14, orientation:'left'},

 {x:10, z:4, orientation:'left'},
 {x:10, z:5, orientation:'front'},
 {x:10, z:5, orientation:'back'},
 {x:10, z:7, orientation:'left'},
 {x:10, z:10, orientation:'front'},
 {x:10, z:11, orientation:'left'},
 {x:10, z:12, orientation:'left'},
 {x:10, z:14, orientation:'left'},

 {x:11, z:4, orientation:'left'},
 {x:11, z:4, orientation:'front'},
 {x:11, z:6, orientation:'left'},
 {x:11, z:7, orientation:'left'},
 {x:11, z:8, orientation:'left'},
 {x:11, z:9, orientation:'left'},
 {x:11, z:11, orientation:'front'},
 {x:11, z:11, orientation:'left'},
 {x:11, z:12, orientation:'left'},
 {x:11, z:13, orientation:'left'},
 {x:11, z:14, orientation:'left'},
 {x:11, z:15, orientation:'left'},

 {x:12, z:2, orientation:'front'},
 {x:12, z:2, orientation:'left'},
 {x:12, z:2, orientation:'back'},
 {x:12, z:4, orientation:'front'},
 {x:12, z:5, orientation:'back'},
 {x:12, z:6, orientation:'left'},
 {x:12, z:7, orientation:'left'},
 {x:12, z:8, orientation:'left'},
 {x:12, z:9, orientation:'left'},
 {x:12, z:10, orientation:'left'},
 {x:12, z:14, orientation:'front'},
 {x:12, z:14, orientation:'left'},
 {x:12, z:14, orientation:'back'},

 {x:13, z:2, orientation:'front'},
 {x:13, z:3, orientation:'left'},
 {x:13, z:4, orientation:'back'},
 {x:13, z:5, orientation:'left'},
 {x:13, z:9, orientation:'front'},
 {x:13, z:9, orientation:'left'},
 {x:13, z:10, orientation:'left'},
 {x:13, z:11, orientation:'left'},
 {x:13, z:12, orientation:'left'},
 {x:13, z:13, orientation:'left'},
 {x:13, z:14, orientation:'back'},

 {x:14, z:2, orientation:'left'},
 {x:14, z:3, orientation:'left'},
 {x:14, z:4, orientation:'front'},
 {x:14, z:5, orientation:'left'},
 {x:14, z:6, orientation:'left'},
 {x:14, z:7, orientation:'left'},
 {x:14, z:8, orientation:'left'},
 {x:14, z:10, orientation:'front'},
 {x:14, z:10, orientation:'left'},
 {x:14, z:11, orientation:'left'},
 {x:14, z:12, orientation:'left'},
 {x:14, z:13, orientation:'left'},
 {x:14, z:14, orientation:'left'},
 {x:14, z:15, orientation:'front'},
 {x:14, z:15, orientation:'left'},

 {x:15, z:4, orientation:'left'},
 {x:15, z:5, orientation:'left'},
 {x:15, z:6, orientation:'left'},
 {x:15, z:7, orientation:'left'},
 {x:15, z:8, orientation:'left'},
 {x:15, z:9, orientation:'front'},
 {x:15, z:10, orientation:'left'},
 {x:15, z:11, orientation:'left'},
 {x:15, z:12, orientation:'left'},
 {x:15, z:13, orientation:'left'},
 {x:15, z:14, orientation:'left'}


































// {x:1, z:2, orientation:'back'},
// {x:1, z:7, orientation:'back'},
// {x:1, z:7, orientation:'right'},
// {x:1, z:9, orientation:'front'},
// {x:1, z:9, orientation:'right'},
//
// {x:2, z:5, orientation:'front'},
// {x:2, z:5, orientation:'back'},
// {x:2, z:5, orientation:'left'},
// {x:2, z:7, orientation:'front'},
// {x:2, z:7, orientation:'back'},
// {x:2, z:7, orientation:'left'},
// {x:2, z:7, orientation:'right'},
//
// {x:3, z:1, orientation:'right'},
// {x:3, z:1, orientation:'left'},
// {x:3, z:2, orientation:'right'},
// {x:3, z:2, orientation:'left'},
// {x:3, z:2, orientation:'back'},
// {x:3, z:5, orientation:'back'},
// {x:3, z:5, orientation:'right'},
// {x:3, z:5, orientation:'front'},
// {x:3, z:6, orientation:'right'}

// {x:4, z:3, orientation:'front'},
// {x:4, z:3, orientation:'back'},
// {x:4, z:3, orientation:'left'},
// {x:4, z:3, orientation:'right'},
// {x:4, z:5, orientation:'front'},
// {x:4, z:7, orientation:'front'},
// {x:4, z:7, orientation:'right'},
// {x:4, z:9, orientation:'right'},
//
//
// {x:5, z:4, orientation:'right'},
// {x:5, z:4, orientation:'back'},
// {x:5, z:7, orientation:'back'},
// {x:5, z:9, orientation:'right'},
// {x:5, z:9, orientation:'front'},
//
//
// {x:6, z:3, orientation:'front'},
// {x:6, z:3, orientation:'left'},
// {x:6, z:7, orientation:'back'},
//
// {x:7, z:2, orientation:'front'},
// {x:7, z:2, orientation:'left'},
// {x:7, z:8, orientation:'back'},
// {x:7, z:8, orientation:'front'},
// {x:7, z:8, orientation:'left'},
// {x:7, z:8, orientation:'right'},
//
// {x:8, z:2, orientation:'front'},
// {x:8, z:2, orientation:'right'},
// {x:8, z:3, orientation:'right'},
// {x:8, z:4, orientation:'right'},
// {x:8, z:5, orientation:'right'},
// {x:8, z:6, orientation:'right'},
// {x:8, z:7, orientation:'right'},
// {x:8, z:8, orientation:'right'},
// {x:8, z:9, orientation:'right'},
//
// {x:9, z:1, orientation:'back'},
// {x:9, z:7, orientation:'back'},
//
// {x:10, z:1, orientation:'back'},
// {x:10, z:5, orientation:'back'},
// {x:10, z:5, orientation:'front'},
// {x:10, z:5, orientation:'left'},
// {x:10, z:7, orientation:'back'},
//
// {x:11, z:1, orientation:'back'},
// {x:11, z:5, orientation:'back'},
// {x:11, z:5, orientation:'front'},
// {x:11, z:7, orientation:'back'},
//
// {x:12, z:1, orientation:'back'},
// {x:12, z:5, orientation:'back'},
// {x:12, z:5, orientation:'front'},
// {x:12, z:7, orientation:'back'},
//
// {x:13, z:1, orientation:'back'},
// {x:13, z:5, orientation:'back'},
// {x:13, z:5, orientation:'front'},
// {x:13, z:5, orientation:'right'},
// {x:13, z:7, orientation:'back'},
//
// {x:14, z:2, orientation:'back'},
// {x:14, z:2, orientation:'front'},
// {x:14, z:2, orientation:'left'},
// {x:14, z:2, orientation:'right'},
// {x:14, z:4, orientation:'front'},
// {x:14, z:4, orientation:'left'},
// {x:14, z:8, orientation:'back'},
// {x:14, z:8, orientation:'front'},
// {x:14, z:8, orientation:'left'},
// {x:14, z:8, orientation:'right'},
//
// {x:15, z:4, orientation:'front'}
];
