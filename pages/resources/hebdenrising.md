---
layout: page
title: Hebden Rising
permalink: /resources/hebden-rising/
categories: [resource, tool, case-study]
summary:
  For community recovery planning, visualisation of the state of
  assets is critical. Assets in this context could include community
  spaces (schools, churches, town halls), businesses (food, basics)
  or infrastructure. This is true for coordination of the immediate
  recovery (which assets require attention), and for the ongoing
  recovery. This is especially true for communities which rely heavily
  on the visitor economy, as sending the message "we're open" is critical.
---

[Hebden Rising][HEBDENRISING] was created following the Boxing Day 2015
floods. It was a response to the question 'Is _x_ open yet?'. An immediate
response to this was the creation of a [Facebook group][FBHRMIO]. This became
unwieldy as more businesses began to open, and it was difficult to validate
the truth of claims being made in the group. It was also almost impossible to
find out if a specific business was open, unless asking directly.

{% include md/image.md name="hebdenrising.png"
  description="Screenshot of Hebden Rising website" %}

The process for creating the site was:

1. Survey the town, street by street and capture the state of the shops.
   As this was being done, Instagram pictures were taken of each.
2. Enter this into a [Google Fusion table][FUSION], and geolocate each
   property. This was a very time-consuming step, and collecting this
   information in advance would be highly beneficial.
3. Publish the site based on code in the
   [hebdenrising gitub repository][HRGITHUB]. This is based on [Cloudmade leaflet][LEAFLET] and map [styles from Stamen][STAMEN], as well as
   [OpenStreetMap][OSM].

Sadly, this is but the start of the process. As the situation changes, it
is important to continue to manage the database. It would be sensible to
have a taskforce to make the updates. We previously tried to allow anyone
to update shop status, but this led to problems with spam and misinformation.
Given this was precisely the issues we were trying to avoid, we decided
an editorial team was better. This is more onerous to manage. A registration
for affected assets might be better, but would require a more robust site
with authentication.  

## Resources

The site is hosted on GitHub pages, with all the content being managed in
the [hebdenrising github repository][HRGITHUB]. The site is on the
`gh-pages` branch.

Data is hosted in a [Google Fusion table][FUSION] with the following columns:

| Column name   | Description
|---------------|--------------
| Name          | Name of asset (business, school, etc)
| Street_number | Number or name of property
| Street_name   | Street property is located on
| Postcode      | Postcode of property
| Location      | Lat / Lng of property
| Status        | Status of property from Closed, Popped-up elsewhere, Planned reopening, Partly open, Fully open
| Comments      | Any other comments - e.g. link to website, alternative details

An admin client is being created at present.

[HEBDENRISING]: http://hebdenrising.com "Link to the Hebden Rising site"
[HRGITHUB]: https://github.com/dringtech/hebdenrising/tree/gh-pages "Link to the Hebden Rising github"
[FUSION]: https://www.google.com/fusiontables/DataSource?docid=1DcFQzc1qCnuKNPIzze6gq3wHYxJIFJ8MSWkPra1N "Link to the Hebden Rising fusion table"
[FBHRMIO]: https://www.facebook.com/groups/467775670091316
[LEAFLET]: http://leafletjs.com/ "Link to the Cloudmade Leaflet library"
[STAMEN]: http://maps.stamen.com/ "Link to the Stamen mapping library"
[OSM]: https://www.openstreetmap.org "Link to OpenStreetMap"
