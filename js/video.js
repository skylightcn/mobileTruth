var app = new Vue({
    el: '#app',
    data: {
        trackId: '',
        lst:[],
        baseUrl:''
    },
    mounted () {
        videoData.forEach(e => {
            let o={}
            o.zh=e.zh
            o.en=e.en
            o.githubUrl=''
            o.gitioUrl=''
            this.lst.push(o)
        });
      },
      methods: {
        onCopy: function (e) {
            console.log('onCopy',e.text)
          },
          onError: function (e) {
            console.log('onError',e.text)
          },
          genUrl () {
              this.lst.forEach(item => {
                this.baseUrl=location.href.replace('admin/video.html','player_html5.html?resource=')
                console.log(this.baseUrl)
                let githubUrl=this.baseUrl+'media/video/'+item.en+'.mp4&trackId='+this.trackId+'&t='+window.getCurrDate()
                item.githubUrl=githubUrl
              })
        },
        genGitIoUrl (githubUrl) {
             
        },
        open(url){
            window.open(url, '_blank')
        }
      }
});