(function (a) {
  if (a(".accrodion-grp").length) {
    var b = a(".accrodion-grp");
    b.each(function () {
      var n = a(this).data("grp-name");
      var o = a(this);
      var m = o.find(".accrodion");
      o.addClass(n);
      o.find(".accrodion .accrodion-content").hide();
      o.find(".accrodion.active").find(".accrodion-content").show();
      m.each(function () {
        a(this)
          .find(".accrodion-title")
          .on("click", function () {
            if (a(this).parent().hasClass("active") === false) {
              a(".accrodion-grp." + n)
                .find(".accrodion")
                .removeClass("active");
              a(".accrodion-grp." + n)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              a(this).parent().addClass("active");
              a(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }
  if (a(".main-navigation .navigation-box .submenu").length) {
    var j = a(".main-navigation .submenu");
    j.parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
      });
    var f = a(".header-navigation .menu-toggler");
    var k = a(".main-navigation .sub-nav-toggler");
    f.on("click", function () {
      var n = a(this);
      var m = n.closest(".header-navigation").find(n.data("target"));
      a(m).slideToggle();
      a(m).toggleClass("showen");
      return false;
    });
    k.on("click", function () {
      var m = a(this);
      m.parent().parent().children(".submenu").slideToggle();
      return false;
    });
  }
  if (a(".popup-with-zoom-anim").length) {
    a(".popup-with-zoom-anim").magnificPopup({
      type: "inline",
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: "auto",
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: "my-mfp-zoom-in",
    });
  }
  if (a(".img-popup").length) {
    var d = {};
    a(".img-popup").each(function () {
      var m = parseInt(a(this).attr("data-group"), 10);
      if (!d[m]) {
        d[m] = [];
      }
      d[m].push(this);
    });
    a.each(d, function () {
      a(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: { enabled: true },
      });
    });
  }
  function e() {
    if (a(".masonary-layout").length) {
      a(".masonary-layout").isotope({
        layoutMode: "masonry",
        itemSelector: ".masonary-item",
      });
    }
    if (a(".masonary-layout-no-grid-width").length) {
      a(".masonary-layout-no-grid-width").isotope({
        layoutMode: "masonry",
        itemSelector: ".masonary-item",
      });
    }
    if (a(".post-filter").length) {
      var n = a(".post-filter li");
      n.children("span").on("click", function () {
        var p = a(this);
        var o = p.parent().attr("data-filter");
        n.children("span").parent().removeClass("active");
        p.parent().addClass("active");
        a(".filter-layout").isotope({
          filter: o,
          animationOptions: { duration: 500, easing: "linear", queue: false },
        });
        return false;
      });
    }
    if (a(".post-filter.has-dynamic-filter-counter").length) {
      var m = a(".post-filter.has-dynamic-filter-counter").find("li");
      m.each(function () {
        var p = a(this).data("filter");
        var o = a(".gallery-content").find(p).length;
        a(this)
          .children("span")
          .append('<span class="count"><b>' + o + "</b></span>");
      });
    }
  }
  if (a(".video-popup").length) {
    a(".video-popup").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,
      fixedContentPos: false,
    });
  }
  if (a(".counter").length) {
    a(".counter").counterUp({ delay: 10, time: 3000 });
  }
  if (a(".stricky").length) {
    a(".stricky")
      .addClass("original")
      .clone(true)
      .insertAfter(".stricky")
      .addClass("stricked-menu")
      .removeClass("original");
  }
  if (a(".banner-carousel__one").length) {
    var g = a(".banner-carousel__one");
    var h = a(".banner-carousel-btn .left-btn");
    var i = a(".banner-carousel-btn .right-btn");
    g.owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: true,
      nav: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 1000,
      autoplay: 5000,
      autoplayHoverPause: true,
    });
    h.on("click", function () {
      g.trigger("next.owl.carousel", [300]);
      return false;
    });
    i.on("click", function () {
      g.trigger("prev.owl.carousel", [300]);
      return false;
    });
    function c(m) {
      var n = m.item.index;
      var o = g
        .find(".item")
        .eq(n + 1)
        .find(".carousel__thumb-img")
        .data("thumb-img");
      var p = g
        .find(".item")
        .eq(n - 1)
        .find(".carousel__thumb-img")
        .data("thumb-img");
      i.css("background-image", "url(" + p + ")");
      h.css("background-image", "url(" + o + ")");
    }
  }
  if (a(".scroll-to-target").length) {
    a(".scroll-to-target").on("click", function () {
      var m = a(this).attr("data-target");
      a("html, body").animate({ scrollTop: a(m).offset().top }, 1000);
      return false;
    });
  }
  if (a(".contact-form-vaidated").length) {
    a(".contact-form-vaidated").validate({
      rules: {
        name: { required: true },
        fname: { required: true },
        lname: { required: true },
        email: { required: true, email: true },
        message: { required: true },
        subject: { required: true },
        booking_date: { required: true },
      },
      submitHandler: function (m) {
        a.post(a(m).attr("action"), a(m).serialize(), function (n) {
          a(m).parent().find(".result").append(n);
          a(m).find('input[type="text"]').val("");
          a(m).find('input[type="email"]').val("");
          a(m).find("textarea").val("");
        });
        return false;
      },
    });
  }
  if (a(".datepicker").length) {
    a(".datepicker").datepicker();
  }
  if (a(".testimonials-one__carousel").length) {
    if (
      a(".testimonials-one__carousel").data("carousel-margin") !== undefined
    ) {
      var l = a(".testimonials-one__carousel").data("carousel-margin");
    } else {
      var l = 80;
    }
    a(".testimonials-one__carousel").owlCarousel({
      loop: true,
      margin: l,
      nav: false,
      navText: [
        '<i class="fa fa-long-arrow-left"></i>',
        '<i class="fa fa-long-arrow-right"></i>',
      ],
      dots: true,
      autoWidth: false,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1, nav: true, dots: false },
        480: { items: 1, nav: true, dots: false },
        767: { items: 1, nav: true, dots: false },
        991: { items: 2, margin: 40 },
        1000: { items: 2 },
        1200: { items: 3 },
      },
    });
  }
  if (a(".testimonials-two__carousel").length) {
    a(".testimonials-two__carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      navText: [
        '<i class="fa fa-long-arrow-left"></i>',
        '<i class="fa fa-long-arrow-right"></i>',
      ],
      dots: true,
      autoWidth: false,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1, nav: true, dots: false },
        480: { items: 1, nav: true, dots: false },
        767: { items: 1, nav: true, dots: false },
        991: { items: 1 },
        1000: { items: 1 },
        1200: { items: 1 },
      },
    });
  }
  if (a(".brand-one__carousel").length) {
    a(".brand-one__carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      navText: [
        '<i class="fa fa-long-arrow-left"></i>',
        '<i class="fa fa-long-arrow-right"></i>',
      ],
      dots: false,
      autoWidth: false,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 2 },
        480: { items: 3 },
        767: { items: 4 },
        991: { items: 4 },
        1000: { items: 5 },
        1200: { items: 5 },
      },
    });
  }
  if (a(".service-two__carousel").length) {
    a(".service-two__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-long-arrow-left"></i>',
        '<i class="fa fa-long-arrow-right"></i>',
      ],
      dots: false,
      autoWidth: false,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        767: { items: 2 },
        991: { items: 2 },
        1199: { items: 3 },
        1200: { items: 4 },
      },
    });
    a(".service-two__carousel-btn-left").on("click", function () {
      a(".service-two__carousel").trigger("next.owl.carousel");
      return false;
    });
    a(".service-two__carousel-btn-right").on("click", function () {
      a(".service-two__carousel").trigger("prev.owl.carousel");
      return false;
    });
  }
  a(window).on("scroll", function () {
    if (a(".scroll-to-top").length) {
      var o = 100;
      if (a(window).scrollTop() > o) {
        a(".scroll-to-top").fadeIn(500);
      } else {
        if (a(this).scrollTop() <= o) {
          a(".scroll-to-top").fadeOut(500);
        }
      }
    }
    if (a(".stricked-menu").length) {
      var m = 100;
      var n = a(".stricked-menu");
      if (a(window).scrollTop() > m) {
        n.addClass("stricky-fixed");
      } else {
        if (a(this).scrollTop() <= m) {
          n.removeClass("stricky-fixed");
        }
      }
    }
  });
  a(window).on("load", function () {
    e();
    if (a(".preloader").length) {
      a(".preloader").fadeOut("slow");
    }
  });
})(jQuery);
