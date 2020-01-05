const menu = document.getElementById("menu");

menu.addEventListener("click", function(e) {
  if (e.target.classList.contains("img-fluid")) {
    window.scrollTo(0, 0);
    menu.classList.remove("bg-f4f4f4");
    const itemIMG = e.target.getAttribute("src");
    const itemName = e.target.getAttribute("alt");
    menu.innerHTML = `
    <section id="menu-item">
      <div class="container">
        <a href="menu.html" class="back-btn"><i class="fa fa-arrow-circle-left fa-3x"></i></a>
        <div class="row spy-1">
          <div class="col-md-6 center">
        
              <img src="${itemIMG}" alt="${itemName}" class="img-fluid" />
      
          </div>
          <div class="col-md-6">
            <h2 class="md-heading">${itemName}</h3>
            <p class="sm-heading primary">$19.99</p>
            <p>
              Curae pretium condimentum egestas scelerisque quisque parturient blandit eu molestie congue adipiscing ridiculus cursus a rutrum sit tempor fringilla hac consectetur id mattis tincidunt. Curae leo a sodales donec vitae parturient luctus a volutpat vivamus iaculis a a ad a a quis euismod penatibus facilisi.
            </p>
            <h2 class="sm-heading text-muted">Share</h3>
            <div class="social-links-light my-3">
              <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" target="_blank"><i class="fab fa-behance"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section id="menu-item-info" class="spy-1 bg-f4f4f4">
      <div class="container row">
        <div class="col-md-6 text-center">
          <h3 class="sm-heading">TEMPUS CONSECTETUR</h3>
          <p>Ac dis vestibulum ut primis eleifend at neque at ornare mus nostra non senectus magna natoque porta scelerisque molestie taciti lobortis torquent ullamcorper a ullamcorper. Hac suspendisse varius ut et consectetur eu in nisi vestibulum consectetur ultricies in dictum consectetur eu hendrerit ante tortor sagittis etiam porta scelerisque molestie ostra non senectus magna natoque. Vestibulum volutpat inceptos augue maecenas vehicula curae fringilla ridiculus consectetur tincidunt sit suspendisse rutrum facilisis nibh id ad scelerisque.</p>
        </div>
        <div class="col-md-6">
          <div class="table-responsive">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">SIZE</th>
                    <th scope="col">CALORIES</th>
                    <th scope="col">FAT</th>
                    <th scope="col">CARBS</th>
                    <th scope="col">PROTEIN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">S</th>
                    <td>150</td>
                    <td>20g</td>
                    <td>23g</td>
                    <td>27g</td>
                  </tr>
                  <tr>
                    <th scope="row">M</th>
                    <td>300</td>
                    <td>33g</td>
                    <td>36g</td>
                    <td>39g</td>
                  </tr>
                  <tr>
                    <th scope="row">L</th>
                    <td>700</td>
                    <td>40g</td>
                    <td>44g</td>
                    <td>47g</td>
                  </tr>
                  <tr>
                    <th scope="row">XL</th>
                    <td >1200</td>
                    <td>51g</td>
                    <td>55g</td>
                    <td>59g</td>
                  </tr>
                </tbody>
              </table>

          </div>
        </div>
      </div>
    </section>
    `;
  }
});
