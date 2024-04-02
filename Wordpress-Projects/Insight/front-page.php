<?php get_header() ?>
<section id="home" class="banner" style="background-image: url('<?php echo get_field('banner_image') ?>');">
      <div class="container">
        <div class="banner__wrapper">
          <h1>
          <?php echo get_field('banner_title_1') ?> <br />
          <?php echo get_field('banner_title_2') ?>
          </h1>
          <div class="banner__btn">
            <a href="" class="btn bg--transparent">See Projects</a>
            <a href="" class="btn bg--primary">Inquire</a>
          </div>
        </div>
      </div>
    </section>
    <section id="services" class="cards">
      <div class="container">
        <div class="cards__title">
          <h2><?php echo get_field('services_title') ?></h2>
          <p><?php echo get_field('services_subtitle') ?></p>
        </div>
        <div class="cards__wrapper">

        <?php 
            $args = array(
                'post_type' => 'servicePost', 
                'posts_per_page' => -1,
            );
            $newQuery = new WP_Query($args);
            ?>

            <?php if($newQuery->have_posts()) : while($newQuery->have_posts()) : $newQuery->the_post();?>
                
                <div class="cards__item">
                    <div class="cards__item__wrapper">
                        <div class="cards__item__text">
                            <h3><?php the_title()?></h3>
                            <p>
                                <?php the_content()?>
                            </p>
                            <ul>
                                <?php
                                $list_items = get_field('list_items'); 
                                if ($list_items) :
                                    $items_array = explode("\n", $list_items);
                                    foreach ($items_array as $item) :
                                        $item = trim($item); 
                                        if (!empty($item)) : 
                                ?>
                                            <li><?php echo esc_html($item); ?></li>
                                <?php
                                        endif;
                                    endforeach;
                                endif;
                                ?>
                            </ul>
                        </div>
                    </div>
                    <a href="<?php the_permalink(); ?>">More Details</a>
                </div>

            <?php
            endwhile;
            else :
                echo "no available content yet";
            endif;
            wp_reset_postdata();
            ?>

        </div>
      </div>
    </section>
    <section id="projects" class="projects">
      <div class="projects__wrapper">

      <?php 
            $args = array(
                'post_type' => 'projectPost', 
                'posts_per_page' => -1,
            );
            $newQuery = new WP_Query($args);
            ?>

            <?php if($newQuery->have_posts()) : while($newQuery->have_posts()) : $newQuery->the_post();?>
            <div class="projects__item">
                <div class="cue"></div>
                <img src="<?php echo get_field('project_image') ?>" alt="" />
                    <div class="projects__item__text">
                        <h3><?php the_title() ?></h3>
                        <p>
                        <?php the_content()?>
                        </p>
                        <a href="" class="btn bg--primary"><?php echo get_field('project_btn') ?></a>
                    </div>
                </div>
            <?php
            endwhile;
            else :
                echo "no available content yet";
            endif;
            wp_reset_postdata();
            ?>


   
      </div>
    </section>
    <section id="contacts" class="contacts">
      <div class="container">
        <div class="contacts__title">
          <h2><?php echo get_field('contact_title') ?></h2>
          <p>
          <?php echo get_field('contact_subtitle') ?>
          </p>
        </div>
        <div class="contacts__wrapper">
          <div class="contacts__form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10">Message</textarea>
            <a href="" class="btn bg--primary">Send Message</a>
          </div>
          <div class="contacts__social">
            <table>
              <tr>
                <td><i class="fa-solid fa-map-pin"></i></td>
                <td><?php echo get_field('contact_address') ?></td>
              </tr>

              <tr>
                <td><i class="fa-solid fa-phone"></i></td>
                <td><?php echo get_field('contact_number') ?></td>
              </tr>

              <tr>
                <td><i class="fa-solid fa-envelope"></i></td>
                <td><?php echo get_field('contact_email') ?></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
<?php get_footer() ?>