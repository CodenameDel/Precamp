let developer = ["뭐냐1", "뭐냐2", "뭐냐3", "뭐냐4", "뭐냐5"]
// undefined
developer[2]
// '뭐냐3'

let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer
// (5) ['뭐냐1', '뭐냐2', '뭐냐3', '뭐냐4', '뭐냐5']
dream
// (3) ['커리어점프', '성공', '할수있다']
developer.concat(dream)
// (8) ['뭐냐1', '뭐냐2', '뭐냐3', '뭐냐4', '뭐냐5', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
// (8) ['뭐냐1', '뭐냐2', '뭐냐3', '뭐냐4', '뭐냐5', '커리어점프', '성공', '할수있다']