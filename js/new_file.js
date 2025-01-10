<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Player</title>
</head>
<body>

    <!-- 按钮：播放视频 -->
    <button onclick="playVideo()">Play Video</button>
    
    <!-- 按钮：关闭视频 -->
    <button onclick="closeVideo()">Close Video</button>
    
    <!-- 视频元素 -->
    <video id="video" width="320" height="240" controls>
        <source src="video.mp4" type="video/mp4">
        您的浏览器不支持视频标签。
    </video>

    <!-- JavaScript 代码 -->
    <script>
        // 定义 playVideo 函数
        function playVideo() {
            const video = document.getElementById('video');  // 获取视频元素
            video.play();  // 播放视频
        }

        // 定义 closeVideo 函数
        function closeVideo() {
            const video = document.getElementById('video');  // 获取视频元素
            video.pause();  // 暂停视频
            video.currentTime = 0;  // 将视频重置到开始位置
        }
    </script>
</body>
</html>
