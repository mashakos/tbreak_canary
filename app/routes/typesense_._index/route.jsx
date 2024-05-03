import { baseMeta } from '~/utils/meta';
import { indexPosts } from './typesense.server.js';
import { json } from '@remix-run/cloudflare';
import Typesense from 'typesense';

export async function loader() {


  //typesense test

  let typesenseClient = new Typesense.Client({
    'nodes': [{
      'host': process.env.TYPESENSE_HOST, // For Typesense Cloud use xxx.a1.typesense.net
      'port': process.env.TYPESENSE_PORT,      // For Typesense Cloud use 443
      'protocol': process.env.PUBLIC_TYPESENSE_PROTOCOL  // For Typesense Cloud use https
    }],
    'apiKey': process.env.TYPESENSE_API_KEY,
    'connectionTimeoutSeconds': 2
  });


  // post schema
  try {
    await typesenseClient.collections('post').retrieve();
    console.log('Found existing collection of post');

    console.log('Deleting collection');
    await typesenseClient.collections('post').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let postSchema = {
      'name': 'post',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'abstract', 'type': 'string' },
        {'name': 'banner', 'type': 'image' },
        {'name': 'date', 'type': 'int64' },
        {'name': 'body', 'type': 'string' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(postSchema)
      .then(function (data) {
        console.log(data);
      });
  }


  const indexedPosts = await indexPosts();
  let postData = [];

  indexedPosts.map(function(indexedPost){

    const bodyStrContent = indexedPost.body;

    let unixdate = new Date(indexedPost.date).getTime();
    postData.push({
      title: indexedPost.title,
      abstract: indexedPost.abstract,
      banner: indexedPost.banner,
      date: unixdate,
      body: bodyStrContent,
      slug: indexedPost.slug,
    });

  });

  try {
    const returnData = await typesenseClient
      .collections("post")
      .documents()
      .import(postData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }

  // projects schema

  try {
    await typesenseClient.collections('project').retrieve();
    console.log('Found existing collection of project');

    console.log('Deleting collection');
    await typesenseClient.collections('project').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let projectSchema = {
      'name': 'project',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'description', 'type': 'string' },
        {'name': 'body', 'type': 'string' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(projectSchema)
      .then(function (data) {
        console.log(data);
      });
  }

  let projectData = [
    {
      'title': 'Reebok #GymIsEverywhere Microsite',
      'description': 'How do you make fitness advocates feel more human in a digital world? Reebok looked to engage with its audience, breaking through the clutter with a meaningful brand purpose and mission.',
      'body': 'We launched a high impact digital campaign with a customized microsite, inviting people to share their fitness stories from around their cities with #GymIsEverywhere, using hero influencers films to launch the campaign and get people moving. The Gym is Everywhere: How do you make fitness advocates feel more human in a digital world? Reebok looked to engage with its audience, breaking through the clutter with a meaningful brand purpose and mission. We increased brand awareness in the region by creating buzz around our core message that: The Gym is Everywhere. The Solution: We launched a high impact digital campaign with a customized microsite, inviting people to share their fitness stories from around their cities with #GymIsEverywhere, using hero influencers films to launch the campaign and get people moving. Meaningful engagement: The microsite was launched with hero videos released for Beirut, Cairo and the GCC with well-known influencers taking the city on as their personal gym asking ‘Where is Your Gym?’ inspiring people to share their response with the hashtag. Under the slogan #GymIsEverywhere, the campaign pays tribute to the unique history and stories in the cities that surround us, and the driven FitGen™ in them who see its unmatched possibility to challenge and innovate. All user generated content was amalgamated on the microsite with a location map of posts to highlight fitness hotspots within the city. All users had to do was snap a pic, tag their workout location and share it on Instagram, they could then download a 10% discount voucher from the microsite. Project outcomes: This campaign issued a wake-up call for city residents inviting them to open their doors and get out into the street for a new level of working out. - 1.6M Social Engagement - 21% Engagement Rate - 2.5M Video Views - 144K Traffic to Website - 100M Impressions 3 weeks - 60% Mentions from Key audience groups',
      'slug': '/projects/rbk-giew',
    },
    {
      'title': 'Mercedes-Benz Messenger Bot',
      'description': 'To enhance brand experience with a younger audience, Mercedes-Benz needed an innovative solution to handle custom queries and requests in real-time.',
      'body': 'An Ai chat bot that delivers a fun test-drive booking experience for fans of Mercedes-Benz and Mercedes-Benz Middle-East. Built on the meya.ai machine learning platform. The Mercedes-Benz Bot: To enhance brand experience with a younger audience, Mercedes-Benz needed an innovative solution to handle custom queries and requests in real-time. The Solution: In August 2016, we launched the Mercedes-Benz Cars Middle East chatbot, a powerful new way to enhance brand experience and interact with regional consumers at scale. The Bilingual Bot: Helped customers explore our range of cars and book a test drive, all through chat. The All-knowing Bot: Even made personalized SUV model recommendations based on the users’ driving habits. The Smart Bot: Sent encrypted booking data directly to relevant general distributors across the region. Project outcomes: Within the first few months, the bot received: - Over 17,000 unique conversations - 6200% Conversion Rate',
      'slug': '/projects/merc-ai-msg',
    },
    {
      'title': 'Masdar Corporate Website',
      'description': 'Developing a fully responsive, cross-browser, mobile friendly website.',
      'body': 'Launched by the Abu Dhabi leadership in 2006 with a mandate to advance renewable energy through education, R&D, investment and commercialization, Masdar plays a key role in securing the emirate\'s continued leadership in the evolving global energy market. Encouraging collaboration: Gaining the trust of the client’s creative team in order to be involved in the design phase, improving the UX for the responsive design solution. The problem: The client required a website that is both modern in design and fully compatible with older browsers like Internet Explorer 7. The delivery and deployment window were also extremely tight - within three weeks. Frontend Development: We developed a fully responsive, cross-browser, mobile friendly frontend in less than two weeks using various technologies (bootstrap, jquery, velocity.js, AJAX, HTML5, webM).',
      'slug': '/projects/masdar',
    },
  ];

  try {
    const returnData = await typesenseClient
      .collections("project")
      .documents()
      .import(projectData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }


  // end of typesense test

  return json({ text : 'Projs Indexed.' });
}

export function meta() {
  return baseMeta({
    title: 'Search Index',
    description:
      'Typesense index.',
  });
}
