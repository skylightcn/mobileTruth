var app = new Vue({ 
    el: '#app',
    data: {
        trackId: '',
        lst:[],
        baseUrl:'',
        githubUrl:'',
        gitioUrl:'',
        multiPic:''
    },
    mounted () {
        imageData.forEach(e => {
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
            this.baseUrl=location.href.replace('admin/image.html','picshow.html?resource=')
            console.log(this.baseUrl)
              this.lst.forEach(item => {
                let githubUrl=this.baseUrl+item.en+'&trackId='+this.trackId
                item.githubUrl=githubUrl
              })
              this.githubUrl=this.baseUrl+this.multiPic+'&trackId='+this.trackId+'&t='+window.getCurrDate()

        },
        genGitIoUrl (githubUrl) {
          axios.post('https://git.io/', {
            url: 'https://github.io'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        open(url){
            window.open(url, '_blank')
        }
      }
});