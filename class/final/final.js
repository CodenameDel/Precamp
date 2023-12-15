function checkValidation() {
    if(document.getElementById("email").value.length === 0 || document.getElementById("email").value.includes("@") === false) {document.getElementById("notEmail").innerText="이메일을 입력하세요"}
    else {document.getElementById("notEmail").innerText==""}

    if(document.getElementById("name").value.length === 0) {document.getElementById("notName").innerText="이름을 입력하세요"}
    else {document.getElementById("notName").innerText==""}

    if(document.getElementById("password").value.length === 0) {document.getElementById("notPassword").innerText="비밀번호를 입력하세요"}
    else {document.getElementById("notPassword").innerText==""}

    if(document.getElementById("rePassword").value.length === 0 || document.getElementById("rePassword").value !== document.getElementById("password").value) {document.getElementById("notPasswordCheck").innerText="비밀번호를 다시 입력하세요"}
    else {document.getElementById("notPasswordCheck").innerText==""}

    if(document.getElementById("religion").value == "지역을 선택하세요.") {document.getElementById("notReligion").innerText="지역을 선택하세요"}
    else {document.getElementById("notReligion").innerText==""}
    
    if(document.getElementById("female").checked == false && document.getElementById("male").checked == false) {document.getElementById("notGender").innerText="성별을 선택하세요"}
    else {
        document.getElementById("notGender").innerText==""
    }

    if(document.getElementById("notEmail").innerText=="" & document.getElementById("notName").innerText=="" && document.getElementById("notPassword").innerText=="" && document.getElementById("notPasswordCheck").innerText=="" && document.getElementById("notReligion").innerText=="" && document.getElementById("notGender").innerText=="") 
    {alert("코드캠프 가입을 축하합니다!")}
}

let isStarted = false;

const btnDisabled = () => {
    
    let number__1 = document.getElementById("number__1").value
    let number__2 = document.getElementById("number__2").value
    let number__3 = document.getElementById("number__3").value
    let target = document.getElementById("target").value
    
    if(number__1 & number__2 && number__3) {
        document.getElementById("submit__1").disabled = false
    } else {
        document.getElementById("submit__1").disabled = true
    }
    
    if(target) {
        document.getElementById("finish").disabled = false
    } else {
        document.getElementById("finish").disabled = true
    }

    if(isStarted === false) {
        isStarted = true
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token
    
        let time = 180
        let timer
    
        timer = setInterval(function(){
    
            if(time >= 0) {
                let min = Math.floor( time / 60 )
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            } else {
                document.getElementById("finish").disabled = true
                document.getElementById("submit__1").disabled = true
                isStarted = false
                console.log("타이머 작동중")
                clearInterval(timer)
                document.getElementById("number__1").value = null;
                document.getElementById("number__2").value = null;
                document.getElementById("number__3").value = null;
                document.getElementById("target").value = null;
            }
    
            },1000)


    } else {
            
    }

}

const MoveCursor1 = () => {
    let number__1 = document.getElementById("number__1").value

    if(number__1.length === 3) {
        document.getElementById("number__2").focus();
    } 

}

const MoveCursor2 = () => {
    let number__2 = document.getElementById("number__2").value

    if(number__2.length === 4) {
        document.getElementById("number__3").focus();
    } 

}

const submitCompleted = () => {
    alert('인증이 완료되었습니다');
}