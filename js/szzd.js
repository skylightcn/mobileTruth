var app = new Vue({ 
    el: '#app',
    data: {
        dynNode: '',
        lst:[],
        longValidUrlAddressCmd:'v.php?api=szzd&id=ogColl.value&index=3&random=on&action=redirect&ssl=0&uri=%2F',
        longValidShortUrlAddressCmd:[
            'v.php?api=szzd&id=longacting.value&index=2&random=on&action=xhr.so&ssl=0&uri=%2F',
            'v.php?api=szzd&id=ogColl.value&index=3&random=on&action=xhr.so&ssl=0&uri=%2F'
        ]
    },
    mounted () {
        console.log(dir)
        dir.forEach(e => {
            let o={}
            o.dirName=e.name
            o.dirValue=e.value
            o.longValidUrl=''
            o.longValidShortUrl=''
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
                let longValidUrl=this.dynNode+'/'+this.longValidUrlAddressCmd+item.dirValue
                let longValidShortUrl=this.dynNode+'/'+this.longValidShortUrlAddressCmd[0]+item.dirValue
                item.longValidUrl=longValidUrl
                item.longValidShortUrl=longValidShortUrl
              })
        },
        open(url){
			
            window.open(url, '_blank')
        }
      }
});